import { Button, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";

const Diet = () => {
  const [isInput, setIsInput] = useState("");

  const handleClick = async () => {
    await axios
      .get("https://api.api-ninjas.com/v1/exercises?muscle=" + isInput, {
        headers: { "X-Api-Key": "uVt2fmKMtZ0lLnwZz0nT+g==PkCKLquVaz3xOBUl" },
      })
      .then(function (response) {
        console.log("this is the  response", response);
        // setIsExercise(response.data);
      });
  };

  return (
    <div className="container mx-auto mt-[10%] ">
      <h1 className="text-5xl font-semibold text-[#001529] text-center">
        {" "}
        Want to search the best diet recipe for your health{" "}
      </h1>{" "}
      <h1 className="text-lg mb-3 mt-1 font-extrabold text-[#001529] text-center">
        {" "}
        Just search here{" "}
      </h1>{" "}
      <center>
        <div className="flex mb-[3%]    justify-center gap-3 items-center w-[50%] ">
          <Input
            onChange={(e) => setIsInput(e.target.value)}
            placeholder="Search specific muscles ex.biceps"
          />
          <Button onClick={handleClick}> Search </Button>{" "}
        </div>{" "}
      </center>{" "}
    </div>
  );
};

export default Diet;
