import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useCallback, useState } from "react";
import Mainfooter from "./components/footer/Mainfooter";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import { AuthContext } from "./shared/context/auth-context";
import ExercisePage from "./pages/exersice";
import Appointment from "./pages/Appointment";
import DoctorPage from "./pages/Doctor.page";
import Diet from "./pages/diet";
import Articles from "./pages/articles";
import FoodRecipe from "./pages/foodRecipe";
import { Healthyaging } from "./pages/healthyaging";
import BmrCalculator from "./pages/bmrCalculator";
import FatCalculator from "./pages/fatCalculator";
import BmiCalculator from "./pages/bmiCalculator";
import WaterCalculator from "./components/dashBoard/waterConsumption";
import FitnessCalculator from "./pages/fitnessCalc";
// import Auth from "./pages/Auth";
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback(() => {
        const isToken = localStorage.getItem("token");
        console.log("this is the token", isToken);
        if (isToken) {
            setIsLoggedIn(true);
        }
    }, []);

    const logout = useCallback(() => {
        const isToken = localStorage.getItem("token");
        console.log("this is the token", isToken);
        if (!isToken) {
            setIsLoggedIn(false);
        }
    }, []);

    let route;
    console.log(isLoggedIn);
    if (isLoggedIn) {
        route = ( <
            Routes >
            <
            Route path = "/dashboard"
            element = { < UserPage / > }
            />{" "} <
            Route path = "/appointment"
            element = { < Appointment / > }
            />{" "} <
            Route path = "/doctors"
            element = { < DoctorPage / > }
            />{" "} <
            Route path = "/exercise"
            element = { < ExercisePage / > }
            />{" "} <
            Route path = "/dietandweight"
            element = { < Diet / > }
            />{" "} <
            Route path = "/dietmanage"
            element = { < FoodRecipe / > }
            />{" "} <
            Route path = "/healthyaging"
            element = { < Healthyaging / > }
            />{" "} <
            Route path = "/bmrcalc"
            element = { < BmrCalculator / > }
            />{" "} <
            Route path = "/fatcalc"
            element = { < FatCalculator / > }
            />{" "} <
            Route path = "/bmicalc"
            element = { < BmiCalculator / > }
            />{" "} <
            Route path = "/watercalc"
            element = { < WaterCalculator / > }
            />{" "} <
            Route path = "/fitnesstracker"
            element = { < FitnessCalculator / > }
            />{" "} <
            Route path = "/articles"
            element = { < Articles / > }
            />{" "} <
            Route path = "*"
            element = { < Navigate to = "/"
                replace / > }
            />{" "} <
            /Routes>
        );
    } else {
        route = ( <
            Routes >
            <
            Route path = "/"
            element = { < Home / > }
            exact / >
            <
            Route path = "*"
            element = { < Navigate to = "/"
                replace / > }
            />{" "} <
            /Routes>
        );
    }

    return ( <
        AuthContext.Provider value = {
            {
                isLoggedIn: isLoggedIn,
                login: login,
                logout: logout,
            }
        } >
        <
        BrowserRouter >
        <
        Navbar / > { route } < Mainfooter / >
        <
        /BrowserRouter>{" "} <
        /AuthContext.Provider>
    );
}

export default App;