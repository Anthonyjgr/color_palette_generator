import React, { useEffect, useState } from "react";
import Chroma from "chroma-js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const copyIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z" />
  </svg>
);

const PaletteCards = ({ colorsScale }) => {
  const [palette, setPalette] = useState([]);
  const [ismobile, setIsMobile] = useState([])

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const color_plus_hexaname = (hex) => {
      const array = [];
      hex.forEach((color, index) => {
        if (index === 0) {
          const obj = { tone: "50", hex: color };
          array.push(obj);
        } else if (index === 10) {
          const obj = { tone: "950", hex: color };
          array.push(obj);
        } else {
          const obj = { tone: index * 100, hex: color };
          array.push(obj);
        }
      });
      return array;
    };
    setPalette(color_plus_hexaname(colorsScale));
  }, [colorsScale]);

  const copyToClipboard = (colorHex) => {
    navigator.clipboard
      .writeText(colorHex)
      .then(() => {
        toast.success(`${colorHex} Copied Successfully`, {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.error("Error copying color:", err);
      });
  };
  
  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center justify-between w-full xs:px-2"
    style={{gap: ismobile ? "5px" : ""}}
    >
      <ToastContainer />
      {palette?.map((color, index) => (
        <div
          onClick={() => copyToClipboard(color?.hex)}
          key={index+"a"}
          className="transform hover:scale-95  md:hover:scale-110 transition-transform duration-300 ease-in-out"
          style={{
            backgroundColor: color?.hex,
            width: ismobile ? "100%" : "80px",
            height: ismobile ? "50px" :"110px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            position: "relative",
            cursor: "pointer",
            color: Chroma(color?.hex).luminance() > 0.5 ? "black" : "white",
          }}
        >
          <p className="text-sm mt-0 md:mt-8" key={index+"b"}>{color?.tone}</p>
          <p className="text-sm" key={index+"c"}>{color?.hex.toUpperCase().slice(1)}</p>
          <button key={index+"d"}>
            <svg
              className="w-4 h-4 absolute top-2 right-2"
              style={{ fill: Chroma(color?.hex).luminance() > 0.5 ? "black" : "white" }}
              key={index+"e"}
            >
              {copyIcon}
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default PaletteCards;
