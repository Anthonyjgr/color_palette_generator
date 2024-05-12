import React from "react";
import Chroma from "chroma-js";

const ButtonsCardFlat = ({ colors }) => {
  
  const buttonTwoColor = colors?.primary_300
    ? Chroma(colors.primary_300).luminance() > 0.4
      ? colors.primary_950
      : colors.primary_50
    : "white"; // Valor por defecto si colors.primary_300 es undefined

  return (
    <div className="flex flex-col w-[304px] h-auto py-4 border border-gray-300 rounded-2xl items-center justify-center gap-4 ">
      <div className="flex w-full items-start ml-10">
        <p className="top-2 left-8 text-xl text-gray-700">Flat Buttons</p>
      </div>
      <button
        className="w-11/12 p-3 rounded-xl"
        style={{
          backgroundColor: colors.primary_100,
          color: colors.primary_950,
        }}
      >
        Button One
      </button>
      <button
        className="w-11/12 p-3 rounded-xl"
        style={{
          backgroundColor: colors.primary_500,
          color: buttonTwoColor,
        }}
      >
        Button Two
      </button>
      <button
        className="w-11/12 p-3 rounded-xl"
        style={{
          backgroundColor: colors.primary_950,
          color: colors.primary_50,
        }}
      >
        Button Three
      </button>
    </div>
  );
};

export default ButtonsCardFlat;
