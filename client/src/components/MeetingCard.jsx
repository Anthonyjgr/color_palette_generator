import photo_1 from "/photo_1.jpg";
import photo_2 from "/photo_2.jpg";
import photo_3 from "/photo_3.jpg";
import photo_4 from "/photo_4.jpg";
import photo_5 from "/photo_5.jpg";

const dot_icon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
  </svg>
);

const MeetingCard = ({ colors }) => {
  return (
    // main container
    <div className="flex flex-col w-[304px] h-[384px] border border-gray-300 rounded-2xl items-center justify-center gap-2 relative">
      <p className="top-2 left-8 absolute text-xl text-gray-700"
      >Today</p>
      {/* card 1 container */}
      <div
        className={`flex flex-col relative w-[258px] h-[100px] rounded-xl pr-[20px] pl-[22px] pt-[12px] pb-[16px] overflow-hidden items-start mt-6`}
        style={{ backgroundColor: colors.primary_100 }}
      >
        <div
          className="w-2 h-full absolute top-0 left-0"
          style={{ backgroundColor: colors.primary_600 }}
        ></div>
        <p className="text-sm font-semibold" style={{ color: colors.primary_900 }}>
          Product Develpment{" "}
        </p>
        <p className="text-sm font-semibold" style={{ color: colors.primary_900 }}>
          9 -11 AM{" "}
        </p>
        {/* participants photo container*/}
        <div className="flex flex-row  w-full gap-1">
          <img
            src={photo_1}
            alt="photo_1"
            className="w-8 rounded-full border-2 border-white"
            style={{ borderColor: colors.primary_600 }}
          />
          <img
            src={photo_2}
            alt="photo_2"
            className="w-8 rounded-full border-2 border-white"
            style={{ borderColor: colors.primary_600 }}
          />
          <img
            src={photo_3}
            alt="photo_3"
            className="w-8 rounded-full border-2 border-white"
            style={{ borderColor: colors.primary_600 }}
          />
          <img
            src={photo_4}
            alt="photo_4"
            className="w-8 rounded-full border-2 border-white"
            style={{ borderColor: colors.primary_600 }}
          />
        </div>
        <svg
          className="w-4 h-4 absolute top-4 right-4"
          style={{ fill: colors.primary_900 }}
        >
          {dot_icon}
        </svg>
      </div>
      {/* card 2 container */}
      <div
        className={`flex flex-col relative w-[258px] h-[100px] rounded-xl pr-[20px] pl-[22px] pt-[12px] pb-[16px] overflow-hidden items-start`}
        style={{ backgroundColor: colors.primary_100 }}
      >
        <div
          className="w-2 h-full absolute top-0 left-0"
          style={{ backgroundColor: colors.primary_600 }}
        ></div>
        <p className="text-sm font-semibold" style={{ color: colors.primary_900 }}>
          Product Develpment{" "}
        </p>
        <p className="text-sm font-semibold" style={{ color: colors.primary_900 }}>
          12 -1 PM{" "}
        </p>
        {/* participants photo container*/}
        <div className="flex flex-row  w-full gap-1">
          <img
            src={photo_3}
            alt="photo_3"
            className="w-8 rounded-full border-2 border-white"
            style={{ borderColor: colors.primary_600 }}
          />
          <img
            src={photo_5}
            alt="photo_5"
            className="w-8 rounded-full border-2 border-white"
            style={{ borderColor: colors.primary_600 }}
          />
        </div>
        <svg
          className="w-4 h-4 absolute top-4 right-4"
          style={{ fill: colors.primary_900 }}
        >
          {dot_icon}
        </svg>
      </div>
      {/* card 3 container */}
      <div
        className={`flex flex-col relative w-[258px] h-[100px] rounded-xl pr-[20px] pl-[22px] pt-[12px] pb-[16px] overflow-hidden items-start`}
        style={{ backgroundColor: colors.primary_100 }}
      >
        <div
          className="w-2 h-full absolute top-0 left-0"
          style={{ backgroundColor: colors.primary_600 }}
        ></div>
        <p className="text-sm font-semibold" style={{ color: colors.primary_900 }}>
          Code review{" "}
        </p>
        <p className="text-sm font-semibold" style={{ color: colors.primary_900 }}>
          2 - 4 PM{" "}
        </p>
        {/* participants photo container*/}
        <div className="flex flex-row  w-full gap-1">
          <img
            src={photo_4}
            alt="photo_1"
            className="w-8 rounded-full border-2 border-white"
            style={{ borderColor: colors.primary_600 }}
          />
          <img
            src={photo_5}
            alt="photo_2"
            className="w-8 rounded-full border-2 border-white"
            style={{ borderColor: colors.primary_600 }}
          />
          <img
            src={photo_2}
            alt="photo_3"
            className="w-8 rounded-full border-2 border-white"
            style={{ borderColor: colors.primary_600 }}
          />
          <img
            src={photo_3}
            alt="photo_4"
            className="w-8 rounded-full border-2 border-white"
            style={{ borderColor: colors.primary_600 }}
          />
          <img
            src={photo_1}
            alt="photo_5"
            className="w-8 rounded-full border-2 border-white"
            style={{ borderColor: colors.primary_600 }}
          />
        </div>
        <svg
          className="w-4 h-4 absolute top-4 right-4"
          style={{ fill: colors.primary_900 }}
        >
          {dot_icon}
        </svg>
      </div>
    </div>
  );
};

export default MeetingCard;
