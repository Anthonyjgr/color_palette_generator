import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}
  className="bg-blue-500 px-4 p-2 rounded-full m-2 text-white"
  >Log In</button>;
};

export default LoginButton;
