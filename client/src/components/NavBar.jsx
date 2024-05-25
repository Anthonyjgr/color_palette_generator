import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";


const NavBar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:3000/auth/logout", "_self");
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/login");
  };
  return (
    <div className="flex flex-row items-center justify-center w-full h-16 rounded-full mb-10 gap-4 max-w-[1000px] xs:px-4">
      <div className="flex flex-row items-center justify-between w-full">
        <Link to="/">
          <h1 className="text-gray-500 hover:text-black transition-all duration-300 ease-in-out">
            Home
          </h1>
        </Link>
        <div className="flex flex-row items-center justify-center">
          <Link to="/my-dashboard">
            <h1 className="text-gray-500 hover:text-black transition-all duration-300 ease-in-out">
              My Palettes
            </h1>
          </Link>
          <LoginButton />
          <LogoutButton />
          {user ? (
            <button
              className=" px-6 text-gray-500 hover:text-black transition-all duration-300 ease-in-out"
              onClick={logout}
            >
              Log Out
            </button>
          ) : (
            <button
              className="px-6 text-gray-500 hover:text-black transition-all duration-300 ease-in-out"
              onClick={handleButtonClick}
            >
              Log In
            </button>
          )}

          {user?.photo && (
            <img
              src={user?.photo}
              alt="user profile photo"
              className="w-10 h-10 rounded-full"
              draggable="false"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
