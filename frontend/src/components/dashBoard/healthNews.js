import { Image } from "antd";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const healthNewsData = [
  {
    text: "What does old age Starts? Its Depends on who you Ask",
  },
  {
    text: "Bird flue Was Circulating 4 Months Before Detection",
  },
  {
    text: "Cholesterol Experts Say Everyone Needs little Known Blood test. ",
  },
];

function HealthNews() {
  const navigate = useNavigate();

  return (
    <div className="mt-28">
      <h4 className="font-bold color-[#28267d] text-xl mt-4"> HEALTH NEWS </h4>{" "}
      <hr className=" my-3 h-3 color-[#cccce7]" />
      <button onClick={() => navigate("/articles")}>
        <div className="  grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1">
          <div className="flex justify-start">
            <Image
              width={400}
              src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
            />
          </div>{" "}
          <motion.div
            whileHover={{ color: "#28267D" }}
            className="flex flex-col justify-center  px-3 col-span-2 "
          >
            <h1 className=" font-bold text-5xl text-start">
              {" "}
              What 's Behind Major Rise In Heart Failure Deaths?{" "}
            </h1>{" "}
            <h3 className="   font-bold text-lg text-start">
              After falling over a decade, the death rate climbed for several
              years and how is about the same as in 1999{" "}
            </h3>{" "}
          </motion.div>{" "}
        </div>{" "}
      </button>{" "}
      <div className="mt-3 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-2  ">
        {" "}
        {healthNewsData.map((data, index) => {
          return (
            <button
              key={index}
              className={`${index !== 2 ? "border-r-2" : null}`}
            >
              <motion.div whileHover={{ color: "#28267D" }}>
                <h4 className="   font-bold text-2xl text-start">
                  {" "}
                  {data.text}{" "}
                </h4>{" "}
              </motion.div>{" "}
            </button>
          );
        })}{" "}
      </div>{" "}
    </div>
  );
}

export default HealthNews;
