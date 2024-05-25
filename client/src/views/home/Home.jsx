import React, { useEffect, useRef, useState } from "react";
import Chroma from "chroma-js";
import PaletteCards from "../../components/PaletteCards";
import MeetingCard from "../../components/MeetingCard";
import ButtonsCard from "../../components/ButtonsCardFlat";
import ButtonsCardOutline from "../../components/ButtonsCardOutline";
import ButtonsCardGradient from "../../components/ButtonsCardGradient";
import ReviewCard from "../../components/ReviewCard";
import ReviewCardColor from "../../components/ReviewCardColor";
import ExportButton from "../../components/ExportButton";
import axios from "axios";
import { baseUrl } from "../../helpers/userData";
import Profile from "../../components/Profile";

const Home = ({ user }) => {
  const [baseColor, setBaseColor] = useState("#2b00ff");
  const [colorScale, setColorScale] = useState([]);
  const [exportScale, setExportScale] = useState(false);
  const [saveButton, setSaveButton] = useState(false);
  const [inputColorName, setInputColorName] = useState("");

  const ref = useRef(baseColor);

  const handleExportBtn = () => {
    setExportScale(!exportScale);
  };

  const prevColorHanlde = (e) => {
    const color = e.target.value;
    if (Chroma.valid(color)) {
      setBaseColor(e.target.value);
    } else {
      setBaseColor(ref.current);
    }
  };

  const handleChangeColor = (color) => {
    if (
      (color && Chroma(color).luminance() > 0.95) ||
      (color && Chroma(color).luminance() < 0.008)
    ) {
      setBaseColor("#969696");
    } else {
      const newColor = color ? color : "#969696";
      setBaseColor(newColor); // Updating base color state
      generateColorScale(newColor); // Generating color's scale
    }
  };

  const generateColorScale = (color) => {
    try {
      const scale = Chroma.scale([
        Chroma(color).brighten(5),
        color,
        Chroma(color).darken(3.5),
      ]).colors(12); // Color scale with 11 colors and the selectoed color at the middle
      scale.shift();
      setColorScale(scale);
    } catch (error) {
      console.error("Error al generar la escala de colores:", error);
    }
  };

  useEffect(() => {
    handleChangeColor(baseColor);
  }, [baseColor]);

  const handleSaveButton = () => {
    setSaveButton(!saveButton);
    // setSaveButton(false);
  };

  const saveColorPallet = async (userId, newPalette, colorName) => {
    try {
      // Agrega la nueva paleta de colores a las paletas de colores existentes
      const newColor = {
        name: colorName ? colorName : newPalette[5],
        scale: newPalette,
      };
      const getUpdatedUserInfo = await axios.get(
        `${baseUrl}/api/user/data/${userId}`
      );
      const userData = getUpdatedUserInfo.data;

      const updatedPalettes = user && [...userData.colorPalettes, newColor];

      // Envía una solicitud PUT para actualizar las paletas de colores del usuario
      await axios.put(`${baseUrl}/api/user/update/${userId}`, {
        colorPalettes: updatedPalettes,
      });

      setSaveButton(false);

      // console.log("Paleta de colores guardada exitosamente.");
    } catch (error) {
      console.error("Error al guardar la paleta de colores:", error);
    }
  };

  const InputColorChange = (e) => {
    setInputColorName(e.target.value);
  };

  const colors_palette = {
    primary_50: colorScale[0],
    primary_100: colorScale[1],
    primary_200: colorScale[2],
    primary_300: colorScale[3],
    primary_400: colorScale[4],
    primary_500: colorScale[5],
    primary_600: colorScale[6],
    primary_700: colorScale[7],
    primary_800: colorScale[8],
    primary_900: colorScale[9],
    primary_950: colorScale[10],
  };

  const export_palette = {
    50: colorScale[0],
    100: colorScale[1],
    200: colorScale[2],
    300: colorScale[3],
    400: colorScale[4],
    500: colorScale[5],
    600: colorScale[6],
    700: colorScale[7],
    800: colorScale[8],
    900: colorScale[9],
    950: colorScale[10],
  };

  return (
    
    <div className="flex flex-col items-center xs:px-2 justify-center gap-10 w-screen relative max-w-[1000px] mb-[100px]">
      <Profile/>
      <h1
        className="font-semibold text-5xl text-gray-500"
        // style={{
        //   backgroundImage: `linear-gradient(to right, ${colors_palette.primary_700}, ${colors_palette.primary_950})`,
        //   WebkitBackgroundClip: "text",
        //   color: "transparent",
        // }}
      >
        Tailwind CSS Color Generator
      </h1>

      {/* <h3>Generador de Escala de Colores</h3> */}
      {/* input container */}
      <div className="flex flex-row border-[1px] border-gray-300 rounded-full p-3 px-4 w-72 items-center">
        {/* color selector container */}
        <div className="flex items-center justify-center w-8 h-8 overflow-hidden rounded-full relative">
          <div
            className="w-10 h-10 absolute right-7"
            style={{ backgroundColor: baseColor }}
          ></div>
          <div
            className="w-10 h-10  absolute left-7"
            style={{ backgroundColor: baseColor }}
          ></div>
          <input
            type="color"
            value={baseColor}
            onChange={prevColorHanlde}
            className=""
            style={{
              backgroundColor: baseColor,
              width: "50px",
              height: "50px",
              cursor: "pointer",
            }}
          />
        </div>
        <input
          type="text"
          placeholder={baseColor}
          onChange={prevColorHanlde}
          className="appearance-none border border-none py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:none"
        />
      </div>
      {/* save and export buttons container*/}
      <div className="flex flex-row gap-4 w-full items-center justify-end px-4">
        <button
          onClick={handleExportBtn}
          className="text-gray-500 hover:text-black transition-all duration-300 ease-in-out"
        >
          Export to tailwind
        </button>
        {exportScale ? (
          <div
            className="absolute flex items-center justify-center max-w-[500px] max-h-[500px] 
        top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-3xl
        bg-white bg-opacity-10 backdrop-blur-[4px] z-10"
          >
            <div className="relative ">
              <ExportButton colors={export_palette} colorName={"Primary"} />
              <button
                onClick={handleExportBtn}
                className="absolute w-4 h-4 top-3 p-4 right-3 rounded-full flex items-center justify-center text-gray-500 hover:text-red-500"
              >
                X
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        {/* save color */}
        <div className="relative">
          <button
            onClick={handleSaveButton}
            className="text-gray-500 hover:text-black transition-all duration-300 ease-in-out"
          >
            Save Palette
          </button>
        </div>
        {saveButton ? (
          <div
            className="bg-gray-100 shadow-lg absolute flex flex-col border-[1px]
         border-gray-300 rounded-lg p-6 gap-8 z-50 w-[350px] h-[250px] items-center justify-center top-[300px] left-1/2 transform -translate-x-1/2 "
          >
            <input
              type="text"
              value={inputColorName}
              onChange={InputColorChange}
              className="w-full border-[1px] border-gray-300 rounded-xl p-2"
            />
            <div className="flex flex-row w-full items-center justify-between">
              <button
                className=" w-5/12 rounded-lg py-2 bg-green-600 text-white hover:bg-green-800 transition-all duration-300 ease-in-out"
                onClick={() =>
                  saveColorPallet(user._id, colorScale && colorScale, inputColorName)
                }
              >
                Save
              </button>
              <button
                className=" w-5/12 rounded-lg py-2 bg-red-500 text-white hover:bg-red-800 transition-all duration-300 ease-in-out"
                onClick={handleSaveButton}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* palellete color section */}
      <PaletteCards colorsScale={colorScale} />
      {/* UI components */}
      <div className="flex flex-row justify-center gap-10 flex-wrap items-center md:justify-between md:gap-0 w-full">
        <MeetingCard colors={colors_palette} />
        <ReviewCard colors={colors_palette} />
        <ReviewCardColor colors={colors_palette} />
      </div>
      <div className="flex flex-row justify-center gap-10 flex-wrap items-center md:justify-between md:gap-0 w-full">
        <ButtonsCard colors={colors_palette} />
        <ButtonsCardOutline colors={colors_palette} />
        <ButtonsCardGradient colors={colors_palette} />
      </div>
    </div>
  );
};

export default Home;
