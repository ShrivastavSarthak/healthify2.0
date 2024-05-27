import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import Appointment from "./Appointment";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CheckAppointment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAppointment, setIsAppointment] = useState([]);
  const [isDoctor, setIsDoctor] = useState([]);
  const showModal = async (doctorId) => {
    setIsModalOpen(true);
    console.log(doctorId);

    await axios
      .get(`http://localhost:5000/api/v1/doctor/doctor/${doctorId}`)
      .then(function (response) {
        setIsDoctor(response.data.getDoctor);
      });
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const userId = localStorage.getItem("Id");

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`http://localhost:5000/api/v1/get-appointments/${userId}`)
        .then(function (response) {
          console.log(response.data.appointments);
          setIsAppointment(response.data.appointments);
        });
    };

    fetch();
  }, [setIsAppointment]);

  console.log(isDoctor);

  const navigate = useNavigate();

  return (
    <div className="container mx-auto">
      <div className="mt-[10%] mb-[3%] mx-[2%]">
        <h1 className="text-5xl font-semibold text-[#001529] text-center">
          {" "}
          Book your appointment with your Doctors{" "}
        </h1>{" "}
        <h1 className="text-lg mb-3 mt-1 font-extrabold text-[#001529] text-center">
          {" "}
          And leave it to us!!
        </h1>{" "}
        <center>
          <Button onClick={() => navigate("/doctors")}> Book now </Button>{" "}
        </center>{" "}
        <h4 className="font-bold color-[#28267d] text-xl mt-4">
          {" "}
          Your Appointments{" "}
        </h4>{" "}
        <hr className=" my-3 h-3 color-[#cccce7]" />
        <div className=" gap-5 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1">
          {" "}
          {isAppointment.map((item, index) => {
            return (
              <div>
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
      </div>{" "}
    </div>
  );
};

export default CheckAppointment;
