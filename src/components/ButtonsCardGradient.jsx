import React, { useState } from "react";
import Chroma from "chroma-js";

const ButtonsCardGradient = ({ colors }) => {
  const buttonTwoColor = colors?.primary_500
    ? Chroma(colors.primary_500).luminance() > 0.4
      ? colors.primary_950
      : colors.primary_50
    : "white";

  const [isHoveredOne, setIsHoveredOne] = useState(false);
  const [isHoveredTwo, setIsHoveredTwo] = useState(false);
  const [isHoveredThree, setIsHoveredThree] = useState(false);

  const handleMouseOverOne = () => {
    setIsHoveredOne(true);
  };

  const handleMouseOutOne = () => {
    setIsHoveredOne(false);
  };
  const handleMouseOverTwo = () => {
    setIsHoveredTwo(true);
  };

  const handleMouseOutTwo = () => {
    setIsHoveredTwo(false);
  };
  const handleMouseOverThree = () => {
    setIsHoveredThree(true);
  };

  const handleMouseOutThree = () => {
    setIsHoveredThree(false);
  };

  const buttonOneStyle = {
    boxShadow: "inset 0 0 0 2px",
    color: colors.primary_100,
    backgroundColor: "none"
  };

  const buttonTwoStyle = {
    boxShadow: "inset 0 0 0 2px",
    color: colors.primary_600,
    backgroundColor: "none"
  };

  const buttonThreeStyle = {
    boxShadow: "inset 0 0 0 2px",
    color: colors.primary_950,
    backgroundColor: "none",
  };
 

  return (
    <div className="flex flex-col w-[304px] h-auto py-4 border border-gray-300 rounded-2xl items-center justify-center gap-4 ">
      <div className="flex w-full items-start ml-10">
        <p className="top-2 left-8 text-xl text-gray-700">Outline Buttons</p>
      </div>
      <button
        className="w-11/12 p-3 rounded-xl transition-all duration-700 ease-in-out"
        onMouseOver={handleMouseOverOne}
        onMouseOut={handleMouseOutOne}
        style={
          isHoveredOne
            ? buttonOneStyle
            : {
                backgroundImage: `linear-gradient(to right, ${colors.primary_100}, ${colors.primary_50})`,
                color: colors.primary_950
              }
        }
      >
        Button One
      </button>
      <button
        className="w-11/12 p-3 rounded-xl transition-all duration-700 ease-in-out"
        onMouseOver={handleMouseOverTwo}
        onMouseOut={handleMouseOutTwo}
        style={
          isHoveredTwo
            ? buttonTwoStyle
            : {
                backgroundImage: `linear-gradient(to right, ${colors.primary_600}, ${colors.primary_200})`,
                color: colors.primary_50
              }
        }
      >
        Button Two
      </button>
      <button
        className="w-11/12 p-3 rounded-xl transition-all duration-700 ease-in-out"
        onMouseOver={handleMouseOverThree}
        onMouseOut={handleMouseOutThree}
        style={
          isHoveredThree
            ? buttonThreeStyle
            : {
                backgroundImage: `linear-gradient(to right, ${colors.primary_950}, ${colors.primary_600})`,
                color: colors.primary_50
              }
        }
      >
        Button Three
      </button>
    </div>
  );
};

export default ButtonsCardGradient;
