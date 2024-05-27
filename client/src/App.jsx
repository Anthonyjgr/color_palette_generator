import { useEffect, useState } from "react";
import "./App.css";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { getUser } from "./helpers/userData.js";
import NavBar from "./components/NavBar.jsx";
import Dashboard from "./views/user_dashboard/Dashboard.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import FailureLogin from "./components/FailureLogin.jsx";
// import axios from "axios"



function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [user, setUser] = useState(null);
  const location = useLocation();
  // const { user, isAuthenticated, isLoading } = useAuth0();

    useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUser();
        // const response = await axios.get("https://api-color-sage.vercel.app/auth/login/success");
        // console.log(response.data);
        setUser(userData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (!isLoading && isAuthenticated) {
  //         setCurrentUser(currentUser);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, [isAuthenticated, user, isLoading]);
  
  // console.log(user);

  const isLoginRoute = location.pathname.startsWith("/login");

  return (
    <div className="flex flex-col items-center justify-center">
      {!isLoginRoute && <NavBar user={user} />}
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/failure" element={<FailureLogin/>} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/my-dashboard"
          element={user ? <Dashboard user={user} /> : <Navigate to="/" />}
        />
        {/* <Route path="/my-dashboard" element={<Dashboard user={user}/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
