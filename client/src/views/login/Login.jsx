import React, { useState } from "react";
import google from "/google.svg";
import github from "/github.svg";
import Spline from '@splinetool/react-spline';
import robot from "/robot.png"
import {baseUrl} from "../../helpers/userData.js"

const Login = () => {

  const google_login = () => {
    window.open(`${baseUrl}/api/auth/google`, "_self");
  };

  const github_login = () => {
    window.open(`${baseUrl}/auth/github`, "_self");
  };

  const google_icon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
      <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
    </svg>
  );

  const github_icon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
    </svg>
  );


  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
        {/* <button className="absolute top-[300px] w-[165px] p-3 rounded-l bg-blue  bg-white">Get In Touch</button> */}
      
      <div className="flex items-center justify-center ">
        <Spline scene="https://prod.spline.design/7Gg0DdcH1-rE-Spp/scene.splinecode"/>
      </div>
      <div className="flex flex-col border-2 rounded-xl p-10 w-[350px] items-center justify-center gap-4 absolute top-[420px]">
        <h1 className="text-3xl text-gray-500">Sign In</h1>
        <button
          className="bg-[#DB4437] p-3 rounded-md text-white w-full flex items-center justify-center gap-4 border-2 border-transparent hover:border-[#DB4437] hover:bg-white hover:text-[#DB4437] duration-500 ease-in-out"
          onClick={google_login}
        >
          <svg className="w-8 h-8 fill-current">{google_icon}</svg>
          Sign up with github
        </button>

        <button
          className="bg-[#2b3137] p-3 rounded-md text-white w-full flex items-center justify-center gap-4 border-2 border-transparent hover:border-[#2b3137] hover:bg-white hover:text-[#2b3137] duration-500 ease-in-out"
          onClick={github_login}
        >
          <svg className="w-8 h-8 fill-current">{github_icon}</svg>
          Sign up with github
        </button>
      </div>
    </div>
  );
};

export default Login;
