import React, { useState } from "react";
import Chroma from "chroma-js";

const ButtonsCardOutline = ({ colors }) => {
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
    boxShadow: isHoveredOne? "none" :"inset 0 0 0 2px",
    color: isHoveredOne ? colors.primary_600 : colors.primary_100,
    backgroundColor: isHoveredOne && colors.primary_100,
  };

  const buttonTwoStyle = {
    boxShadow: isHoveredTwo?  "none" :"inset 0 0 0 2px",
    color: isHoveredTwo ? buttonTwoColor : colors.primary_500,
    backgroundColor: isHoveredTwo && colors.primary_500,
  };

  const buttonThreeStyle = {
    boxShadow: isHoveredThree ? "none":"inset 0 0 0 2px",
    color: isHoveredThree ? colors.primary_50 : colors.primary_950,
    backgroundColor: isHoveredThree && colors.primary_950,
  };

  return (
    <div className="flex flex-col w-[304px] min-w-[304px] h-auto py-4 border border-gray-300 rounded-2xl items-center justify-center gap-4 ">
      <div className="flex w-full items-start ml-10">
        <p className="top-2 left-8 text-xl text-gray-700">Outline Buttons</p>
      </div>
      <button
        className="w-11/12 p-3 rounded-xl transition-all duration-500 ease-in-out"
        onMouseOver={handleMouseOverOne}
        onMouseOut={handleMouseOutOne}
        style={buttonOneStyle}
      >
        Button One
      </button>
      <button
        className="w-11/12 p-3 rounded-xl transition-all duration-500 ease-in-out"
        onMouseOver={handleMouseOverTwo}
        onMouseOut={handleMouseOutTwo}
        style={buttonTwoStyle}
      >
        Button Two
      </button>
      <button
        className="w-11/12 p-3 rounded-xl transition-all duration-500 ease-in-out"
        onMouseOver={handleMouseOverThree}
        onMouseOut={handleMouseOutThree}
        style={buttonThreeStyle}
      >
        Button Three
      </button>
    </div>
  );
};

export default ButtonsCardOutline;
