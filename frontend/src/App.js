import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {  useCallback, useState } from "react";
import Mainfooter from "./components/footer/Mainfooter";
import Navbar from "./components/NavBar/Navbar";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import Doctors from "./components/doctors/Doctors";
import Appointment from "./components/appointment/Appointment";
import { AuthContext } from "./shared/context/auth-context";
// import Auth from "./pages/Auth";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let route;
  console.log(isLoggedIn);
  if (isLoggedIn) {
    route = (
      <Routes>
        <Route path="/dashboard/:id" element={<UserPage />} />
        <Route path="/appointmet/:id" element={<Appointment />} />
        <Route path="/Doctors/:id" element={<Doctors />} />
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>
    );
  } else {
    route = (
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>
    );
  }

  return (
    
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          login: login,
          logout: logout,
        }}
      >
        <BrowserRouter>
          <Navbar />
          {route}
          <Mainfooter />
        </BrowserRouter>
      </AuthContext.Provider>
    
  );
}

export default App;
