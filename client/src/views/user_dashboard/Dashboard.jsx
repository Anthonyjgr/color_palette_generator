import React, { useState } from "react";
import Chroma from "chroma-js";
import PaletteCards from "../../components/PaletteCards";
import axios from "axios";
import { useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";

const Dashboard = ({ user }) => {
  const [palettes, setPalettes] = useState([]);
  const [loading, setIsLoading] = useState([]);

  useEffect(() => {
    const fetchUserPalettes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/user/data/${user._id}`
        );
        setPalettes(response.data.colorPalettes);
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    if (user && user._id) {
      fetchUserPalettes();
    }
  }, [user]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const delete_icon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
    </svg>
  );

  const handleColorDelete = async (userId, colorID) => {
    // console.log(userId, colorID)
    try {
      // const userColors = user.colorPalettes;

      // Filter out the palette to be deleted
      const updatedPalettes = palettes.filter((palette) => palette._id !== colorID);

      // Update user's palettes in the database
      await axios.put(`http://localhost:3000/api/user/update/${userId}`, {
        colorPalettes: updatedPalettes,
      });

      // Update local state to reflect changes
      setPalettes(updatedPalettes);

      console.log("Paleta de colores eliminada exitosamente.");
    } catch (error) {
      console.error("Error al eliminar la paleta de colores:", error);
    }
  };

  return (
    <div className="w-screen h-full flex items-center justify-center">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="rounded-full h-20 w-20 bg-black animate-ping"></div>
        </div>
      ) : (
        <div className="flex flex-col justify-center w-full max-w-[1000px] ">
          {palettes.length === 0 && (
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex items-center justify-center ">
                <Spline scene="https://prod.spline.design/7Gg0DdcH1-rE-Spp/scene.splinecode" />
              </div>
              <h1
                className="text-2xl max-w-[500px] flex font-bold "
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(0,24,255,1) 0%, rgba(255,0,0,1) 100%)`,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Save your Color Palettes and they will be here waiting four You!
              </h1>
              <Link to="/">
                <button className="w-[250px] p-3 rounded-xl transition-all duration-300 ease-in-out mt-4 text-white bg-black hover:bg-gray-500">
                  Palette Generator
                </button>
              </Link>
            </div>
          )}
          {palettes &&
            palettes.map((palette, index) => (
              <div>
                <div className="flex flex-row w-full items-center justify-between p-4">
                  <h1 className="text-sm font-regular text-gray-500 ">
                    {palette.name.toUpperCase()}
                  </h1>
                  <svg
                    className="w-4 h-4 left-[120px] top-[-20px] cursor-pointer"
                    style={{ fill: "rgb(107 114 128)" }}
                    onClick={() => handleColorDelete(user._id, palette._id)}
                    key={index}
                  >
                    {delete_icon}
                  </svg>
                </div>
                <PaletteCards key={index} colorsScale={palette.scale} />
              </div>
            ))}
          {palettes.length === 0 ? (
            ""
          ) : (
            <Link to="/">
              <button className="w-[250px] p-3 rounded-xl transition-all duration-300 ease-in-out mt-4 text-white bg-black hover:bg-gray-500">
                Palette Generator
              </button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
