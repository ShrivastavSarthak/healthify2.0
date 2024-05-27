import "./App.css";
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginpage/login.page";
import SignupPage from "./pages/signuppage/signup.page";
import Dashboard from "./pages/dashboard/dashboard.page";

function App() {
  const [isLogin, setISLogin] = useState(false);

  useState(() => {
    const isToken = localStorage.getItem("isToken");
    console.log("isToken: " + isToken);
    if (isToken) {
      setISLogin(true);
    } else {
      setISLogin(false);
    }
    console.log("user state change", isLogin);
  });

  return (
    <>
      <BrowserRouter>
        {" "}
        {!isLogin ? (
          <Routes>
            <Route path="/" element={<LoginPage />} />{" "}
            <Route path="/signup" element={<SignupPage />} />{" "}
            <Route path="/dashboard" element={<Dashboard />} />{" "}
          </Routes>
        ) : null}{" "}
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
