import { useEffect, useState } from "react";
import "./App.css";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import {getUser} from "./helpers/userData.js"
import NavBar from "./components/NavBar.jsx";
import Dashboard from "./views/user_dashboard/Dashboard.jsx";

function App() {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
        console.log(userData)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const isLoginRoute = location.pathname.startsWith("/login");

  return (
    < div className="flex flex-col items-center justify-center">
      { !isLoginRoute && <NavBar user={user}/>}
        <Routes>
          <Route path="/" element={<Home user ={user}/>} />
          <Route path="/login" element={<Login/> }/>
          <Route path="/my-dashboard" element={user ? <Dashboard user={user}/>: <Navigate to="/"/>}/>
          {/* <Route path="/my-dashboard" element={<Dashboard user={user}/>}/> */}
        </Routes>
    </div>
  );
}

export default App;

