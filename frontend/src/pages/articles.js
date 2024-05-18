import { Button, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";

const Articles = () => {
    const [isInput, setIsInput] = useState("");

    const handleClick = async() => {
        try {
            const response = await axios.get("enter the api" + isInput, {
                headers: { "X-Api-Key": "uVt2fmKMtZ0lLnwZz0nT+g==PkCKLquVaz3xOBUl" },
            });
            //  setIsExercise(response.data);
            // console.log("this is the response", isExercise);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return ( <
        div className = "container mx-auto mt-[10%] " >
        <
        h1 className = "text-5xl font-semibold text-[#001529] text-center" > { " " }
        Update yourself with the best knowledgeable articles. { " " } <
        /h1>{" "} <
        h1 className = "text-lg mb-3 mt-1 font-extrabold text-[#001529] text-center" > { " " }
        Just search here { " " } <
        /h1>{" "} <
        center >
        <
        div className = "flex  justify-center gap-3 items-center w-[50%] " >
        <
        Input onChange = {
            (e) => setIsInput(e.target.value) }
        placeholder = "Search specific muscles ex.biceps" /
        >
        <
        Button onClick = { handleClick } > Search < /Button>{" "} <
        /div>{" "} <
        /center>{" "} <
        /div>
    );
};

export default Articles;