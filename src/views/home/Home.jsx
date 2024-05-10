import React, { useEffect, useRef, useState } from "react";
import Chroma from "chroma-js";
import PaletteCards from "../../components/PaletteCards";

const Home = () => {
  const [baseColor, setBaseColor] = useState("#969696"); // Color base inicial
  const [colorScale, setColorScale] = useState([]); // Escala de colores
  const ref =  useRef(baseColor)
  
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
    // console.log(Chroma(baseColor).luminance())
    const generateColorScale = (color) => {
      try {
        const scale = Chroma.scale([
          Chroma(color).brighten(5),
          color,
          Chroma(color).darken(3.5),
        ]).colors(12); // Color scale with 11 colors and the selectoed color at the middle
        scale.shift()
        setColorScale(scale)
      } catch (error) {
        console.error("Error al generar la escala de colores:", error);
      }
    };

    
    useEffect(() => {
      handleChangeColor(baseColor);
    }, [baseColor]);
    // console.log(colorScale)
    // console.log(tailwindColorSchema)

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h1 className="font-bold text-5xl">Tailwind CSS Color Generator</h1>
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
        <PaletteCards colorsScale={colorScale} />
    </div>
  );
};

export default Home;
