import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navBar/nav-bar";

const Dashboard = () => {
  const [isDoctor, setIsDoctor] = useState();

  const id = localStorage.getItem("id");

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`http://localhost:5000/api/v1/doctor/doctor/${id}`)
        .then(function (response) {
          setIsDoctor(response.data.getDoctor);
        });
    };
    fetch();
  }, [setIsDoctor]);

  return (
    <div>
      <Navbar />
      <center className="my-3 ">
        <h1 className="text-2xl font-bold"> Welcome {isDoctor.fullName} </h1>{" "}
      </center>{" "}

    </div>
  );
};

export default Dashboard;
