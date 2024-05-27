import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
    className=" bg-black px-4 p-2 rounded-full m-2 text-gray-200 hover:bg-slate-600 hover:text-white"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;