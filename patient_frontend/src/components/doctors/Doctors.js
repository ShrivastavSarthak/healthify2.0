import { Avatar, Button, DatePicker, Input, Modal } from "antd";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Appointment from "../appointment/Appointment";
import { UserOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const Doctors = () => {
  const [isData, setIsData] = useState([]);
  const [isAppointmentModalVisible, setAppointmentModalVisible] =
    useState(false);
  const [isViewMoreModalVisible, setViewMoreModalVisible] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const userId = localStorage.getItem("Id");

  const [formData, setFormData] = useState({
    patient: userId,
    doctor: null,
    date: null,
    reason: "",
  });

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleReasonChange = (e) => {
    setFormData({ ...formData, reason: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/appointment",
        formData
      );
      console.log(response);
      // Handle the response here
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/v1/doctor/alldoctors"
      );
      setIsData(response.data.fetAllDoctors);
    };
    fetch();
  }, []);

  const handleBookAppointmentClick = (doc) => {
    setSelectedDoctor(doc);
    setAppointmentModalVisible(true);
    setFormData({ ...formData, doctor: doc._id });
  };

  const handleViewMoreClick = (doc) => {
    setSelectedDoctor(doc);
    console.log(selectedDoctor.fullName);
    setViewMoreModalVisible(true);
  };

  return (
    <Fragment>
      <div>
        <h4 className="font-bold color-[#28267d] text-xl mt-4">
          {" "}
          Your doctors{" "}
        </h4>{" "}
        <hr className="my-3 h-3 color-[#cccce7]" />
        <div className="gap-5 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1">
          {" "}
          {isData.map((item, index) => {
            return (
              <div
                key={index}
                className="p-3 rounded-lg shadow-md border-gray-400 border-r-2"
              >
                <center>
                  <Avatar size="large" icon={<UserOutlined />} />{" "}
                  <h4 className="mt-2"> Name: {item.fullName} </h4>{" "}
                  <h4 className="mt-2"> Specialist: {item.specialization} </h4>{" "}
                  <h4 className="mt-2"> Year of Exp: {item.exp} </h4>{" "}
                </center>{" "}
                <div className="flex justify-between mt-2">
                  <Button onClick={() => handleBookAppointmentClick(item)}>
                    Book appointment{" "}
                  </Button>{" "}
                  <Button onClick={() => handleViewMoreClick(item)}>
                    View more{" "}
                  </Button>{" "}
                </div>{" "}
              </div>
            );
          })}{" "}
        </div>{" "}
      </div>{" "}
      <Modal
        title="Book Appointment"
        visible={isAppointmentModalVisible}
        onCancel={() => setAppointmentModalVisible(false)}
      >
        <div className="my-[5%]">
          <center>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col justify-start gap-3">
                <DatePicker onChange={handleDateChange} />{" "}
                <TextArea
                  rows={4}
                  onChange={handleReasonChange}
                  placeholder="enter the reason"
                />
                <Button type="primary" htmlType="submit" className="mt-3">
                  Submit{" "}
                </Button>{" "}
              </div>{" "}
            </form>{" "}
          </center>{" "}
        </div>{" "}
      </Modal>{" "}
      <Modal
        title="Doctor's details"
        visible={isViewMoreModalVisible}
        onCancel={() => setViewMoreModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setViewMoreModalVisible(false)}>
            Close{" "}
          </Button>,
        ]}
      >
        {selectedDoctor && (
          <>
            <Avatar size="large" icon={<UserOutlined />} />{" "}
            <h4 className="mt-2"> Name: {selectedDoctor.fullName} </h4>{" "}
            <h4 className="mt-2">
              {" "}
              Specialist: {selectedDoctor.specialization}{" "}
            </h4>{" "}
            <h4 className="mt-2"> Year of Exp: {selectedDoctor.exp} </h4>{" "}
            <h4 className="mt-2">
              {" "}
              Working hours: {selectedDoctor.workingHrs}{" "}
            </h4>{" "}
          </>
        )}{" "}
      </Modal>{" "}
    </Fragment>
  );
};

export default Doctors;
