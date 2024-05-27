import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";


const NavBar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:3000/auth/logout", "_self");
  };

  const navigate = useNavigate();
  const {isAuthenticated, isLoading} = useAuth0();

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
          {
            isAuthenticated ?
          <Link to="/my-dashboard">
            <h1 className="text-gray-500 hover:text-black transition-all duration-300 ease-in-out">
              My Palettes
            </h1>
          </Link> : ""
          }
          
          
          {user ? (
              <LogoutButton />
          ) : (
            <LoginButton />
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
