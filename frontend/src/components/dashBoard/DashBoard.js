import { motion } from "framer-motion";
import React, { Fragment } from "react";
import LivingHealthy from "./livingHealthy";
import HealthNews from "./healthNews";
import ExpertsInsight from "./ExpertsInsight";
import ToolAndTrack from "./ToolAndTrack";
import { useNavigate } from "react-router-dom";
import { Image } from "antd";

const DashBoard = () => {
    const navigate = useNavigate();

    return ( <
        div className = "container mx-auto" >
        <
        h4 className = "font-bold color-[#28267d] text-xl mt-4" >
        Today 's top stories{" "} <
        /h4>{" "} <
        hr className = "my-3 h-3 color-[#cccce7]" / >
        <
        button onClick = {
            () => {
                navigate("/exercise");
            }
        } >
        <
        div className = "grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1" >
        <
        div className = "overflow-hidden" >
        <
        motion.div whileHover = {
            {
                scale: 1.1,
                transition: {
                    duration: 0.4,
                    ease: "easeOut",
                },
            }
        } >
        <
        img src = "https://images.unsplash.com/photo-1579455150073-3a7974b46aa0?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt = "Exercise" /
        >
        <
        /motion.div>{" "} <
        /div>{" "} <
        motion.div whileHover = {
            { color: "#28267D" } }
        className = "flex flex-col justify-center text-start px-3" >
        <
        h1 className = "font-bold text-5xl" > 7 Most effective Exercises < /h1>{" "} <
        h3 className = "font-bold text-lg" >
        What are some of the best exercises ? Fitness experts offer a list of the top moves to get a good workout { " " } <
        /h3>{" "} <
        /motion.div>{" "} <
        /div>{" "} <
        /button>{" "} <
        hr className = "my-3 h-3 color-[#cccce7]" / > { /* Video Section */ } { " " } <
        div className = "grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1" > { " " } { /* Video 1 */ } { " " } <
        button >
        <
        div className = "grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1" >
        <
        div className = "overflow-hidden" >
        <
        motion.div whileHover = {
            {
                scale: 1.1,
                transition: {
                    duration: 0.4,
                    ease: "easeOut",
                },
            }
        } >
        <
        Image preview = { false }
        src = "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg" /
        >
        <
        /motion.div>{" "} <
        /div>{" "} <
        motion.div whileHover = {
            { color: "#28267D" } }
        className = "flex flex-col justify-center  px-3" >
        <
        h3 className = " font-bold text-md text-start" > { " " }
        Lupus Diet and Nutrition Tips { " " } <
        /h3>{" "} <
        /motion.div>{" "} <
        /div>{" "} <
        /button>{" "} <
        button onClick = {
            () => navigate("/dietmanage") } >
        <
        div className = " grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1" >
        <
        div className = "overflow-hidden" >
        <
        motion.div whileHover = {
            {
                scale: 1.1,
                transition: {
                    duration: 0.4,
                    ease: "easeOut",
                },
            }
        } >
        <
        Image preview = { false }
        src = "https://images.unsplash.com/photo-1556048029-9c5edf1aa695?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " /
        >
        <
        /motion.div>{" "} <
        /div>{" "} <
        motion.div whileHover = {
            { color: "#28267D" } }
        className = "flex flex-col justify-center  px-3" >
        <
        h3 className = " font-bold text-md text-start" > { " " }
        THe Health benefits of berries { " " } <
        /h3>{" "} <
        /motion.div>{" "} <
        /div>{" "} <
        /button>{" "} <
        button >
        <
        div className = " grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1" >
        <
        div className = "overflow-hidden" >
        <
        motion.div whileHover = {
            {
                scale: 1.1,
                transition: {
                    duration: 0.4,
                    ease: "easeOut",
                },
            }
        } >
        <
        img src = "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt = "Video 3" /
        >
        <
        /motion.div>{" "} <
        /div>{" "} <
        motion.div whileHover = {
            { color: "#28267D" } }
        className = "flex flex-col justify-center px-3" >
        <
        h3 className = "font-bold text-md text-start" >
        Signs of Nervous Breakdown { " " } <
        /h3>{" "} <
        /motion.div>{" "} <
        /div>{" "} <
        /button>{" "} <
        /div>{" "} <
        LivingHealthy / >
        <
        HealthNews / >
        <
        ExpertsInsight / >
        <
        ToolAndTrack / >
        <
        /div>
    );
};

export default DashBoard;