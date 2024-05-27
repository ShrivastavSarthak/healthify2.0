import axios from "axios";
import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navBar/nav-bar";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDoctor, setIsDoctor] = useState([]);

  const id = localStorage.getItem("id");

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`http://localhost:5000/api/v1/get-doctor-appointments/${id}`)
        .then(function (response) {
          // console.log(response.data.appointments);
          setIsDoctor(response.data.appointments);
        });
    };
    fetch();
  }, [setIsDoctor]);

  const showModal = (doctor)=>{
    setIsModalOpen(true);
  }



  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <center className="my-3 ">
          <h1 className="text-2xl font-bold"> Welcome Doctor </h1>{" "}
          <h3>here are your appointments</h3>
        </center>{" "}
        <div className=" gap-5 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1">
          {" "}
          {isDoctor.map((item, index) => {
            return (
              <div key={index}>
                <div className="rounded-lg shadow-lg border-r-2 p-3">
                  <div className="flex justify-between mb-4">
                    <h4 className="font-bold"> {item.name} </h4>{" "}
                    <h4 className="font-bold"> {item.status} </h4>{" "}
                  </div>{" "}
                  <p className="font-thin text-justify"> {item.reason} </p>{" "}
                  <div className="flex justify-between mt-3">
                    <h4 className="font-bold">
                      {" "}
                      {item.createdAt.slice(0, 10)}{" "}
                    </h4>{" "}
                    <Button onClick={() => showModal(item.doctor)}>
                      {" "}
                      view more{" "}
                    </Button>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            );
          })}{" "}
          <Modal
            title="Doctor's Info"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <h3> Name: {isDoctor.fullName} </h3>{" "}
            <h3> Mobile number: {isDoctor.mobNumber} </h3>{" "}
            <h3> Exp: {isDoctor.exp} </h3>{" "}
            <h3> working hrs: {isDoctor.workingHrs} </h3>{" "}
          </Modal>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Dashboard;
