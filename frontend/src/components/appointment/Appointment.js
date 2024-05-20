import { Button, DatePicker, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";

const { TextArea } = Input;

const Appointment = ({ doctorID }) => {
    const [formData, setFormData] = useState({
        date: null,
        reason: "",
    });

    console.log(doctorID);
    const handleDateChange = (date) => {
        setFormData({...formData, date });
    };

    const handleReasonChange = (e) => {
        setFormData({...formData, reason: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        const response = axios.post("http://localhost:5000/api/v1/appointment");
    };

    return ( <
        div className = "my-[5%]" >
        <
        center >
        <
        form onSubmit = { handleSubmit } >
        <
        div className = "flex flex-col justify-start gap-3" >
        <
        DatePicker onChange = { handleDateChange }
        />{" "} <
        TextArea rows = { 4 }
        onChange = { handleReasonChange }
        placeholder = "enter the reason" /
        >
        <
        Button type = "primary"
        htmlType = "submit"
        className = "mt-3" >
        Submit { " " } <
        /Button>{" "} <
        /div>{" "} <
        /form>{" "} <
        /center>{" "} <
        /div>
    );
};

export default Appointment;