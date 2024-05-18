import { Avatar } from "antd";
import React from "react";
import { motion } from "framer-motion";
import { UserOutlined } from "@ant-design/icons";
import { Player } from "video-react";

function ExpertsInsight() {
  return (
    <div className="mt-8 bg-[#001529] py-5">
      <div className=" grid grid-cols-3">
        <button>
          <div className="px-3 flex items-center gap-3">
            <Avatar size={100} icon={<UserOutlined />} />{" "}
            <div className="text-start">
              <h2 className="font-thin text-gray-400 text-xl">
                {" "}
                Experts Insights Form{" "}
              </h2>{" "}
              <motion.h2
                whileHover={{ color: "#F5C23B" }}
                className="font-bold text-gray-400 text-lg"
              >
                {" "}
                John Whyte, MD{" "}
              </motion.h2>{" "}
              <h3 className="font-thin text-gray-400 text-lg">
                {" "}
                WebMD Chief Medical Officer{" "}
              </h3>{" "}
            </div>{" "}
          </div>{" "}
        </button>{" "}
        <div className="col-span-2 flex items-center">
          <div className="h-0.5 w-full bg-[#F5C23B] me-4 rounded-full " />
        </div>{" "}
      </div>{" "}
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-2 m-4 ">
        <div className="py-3">
          <Player playsInline fluid={true} aspectRatio="16:9" autoPlay={true}>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          </Player>{" "}
        </div>{" "}
        <div className="flex ">
          <div className="h-full w-0.5 mx-5 bg-[#F5C23B]" />
          <div className="flex flex-col justify-between">
            <p className=" text-xl text-gray-200 font-thin text-justify">
              Experience a virtual tour of our hospital through an engaging
              video showcase.Immerse yourself in our state - of - the - art
              facilities, compassionate staff, and cutting - edge medical
              technology.From the moment you step through our doors, you 'll
              witness the dedication to exceptional patient care and the
              commitment to your well - being.Join us on this journey and
              discover why our hospital is your trusted healthcare partner.{" "}
            </p>{" "}
            <button className="  w-full py-4  rounded-xl font-bold text-lg bg-slate-200 transition duration-300 ease-in-out  hover:bg-[#F5C23B] ">
              {" "}
              Book Appointment Now{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default ExpertsInsight;
