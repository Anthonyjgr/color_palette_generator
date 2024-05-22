import React from "react";
import photo from "/public/photo_1.jpg";

const ReviewCardColor = ({ colors }) => {
  const country = "Chile";
  const stars = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
    </svg>
  );
  const name = "Grace Guzmán";
  const role = "Chief Executive Officer";
  const testimony =
    "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.";
  const starStyle = {
    fill: "white",
  };

  return (
    <div
      className="flex flex-col w-[304px] h-[384px] border border-gray-300 rounded-2xl items-center justify-center gap-6"
      style={{
        backgroundImage: `linear-gradient(180deg, ${colors.primary_950}, ${colors.primary_700})`,
      }}
    >
      <p className="text-xl font-semibold text-gray-50" style={{ color: colors.primary_50 }}>
        {name}
      </p>
      <div
        className="w-20 h-20 rounded-full overflow-hidden"
        style={{ border: "2px solid", color: colors.primary_50, boxSizing: "border-box" }}
      >
        <img src={photo} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col items-center justify-center gap-[4px]">
        <p className="font-semibold text-sm " style={{ color: colors.primary_50 }}>
          {role}
        </p>
        <p className="font-semibold text-sm " style={{ color: colors.primary_100 }}>
          {country}
        </p>
        <div className="flex flex-row w-32">
          <svg className="w-26 h-4" style={starStyle}>
            {stars}
          </svg>
          <svg className="w-26 h-4" style={starStyle}>
            {stars}
          </svg>
          <svg className="w-26 h-4" style={starStyle}>
            {stars}
          </svg>
          <svg className="w-26 h-4" style={starStyle}>
            {stars}
          </svg>
          <svg className="w-26 h-4" style={starStyle}>
            {stars}
          </svg>
        </div>
      </div>

      <p className="text-sm text-center text-gray-200 w-11/12">{testimony}</p>
    </div>
  );
};

export default ReviewCardColor;
