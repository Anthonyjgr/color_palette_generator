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
import axios from "./config/axios.js";
// import axios from "axios"

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  // const [user, setUser] = useState(null);
  const location = useLocation();
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isLoading && isAuthenticated) {
          const response = await axios.post("/auth/login/social", user);
          setCurrentUser(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [isAuthenticated, isLoading, user]);



  const isLoginRoute = location.pathname.startsWith("/login");

  return (
    <div className="flex flex-col items-center justify-center">
      {!isLoginRoute && <NavBar user={currentUser} />}
      <Routes>
        <Route path="/" element={<Home user={currentUser} />} />
        <Route path="/failure" element={<FailureLogin />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/my-dashboard"
          element={currentUser ? <Dashboard user={currentUser} /> : <Navigate to="/" />}
        />
        {/* <Route path="/my-dashboard" element={<Dashboard user={currentUser}/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
