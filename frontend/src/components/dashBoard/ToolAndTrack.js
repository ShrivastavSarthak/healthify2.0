import { Image } from "antd";
import React from "react";
import { motion } from "framer-motion";

function ToolAndTrack() {
  return (
    <div className="mt-28">
      <h4 className="font-bold color-[#28267d] text-xl mt-4">
        {" "}
        TOOL, TRACKER AND CALCULATORS{" "}
      </h4>{" "}
      <hr className=" my-3 h-3 color-[#cccce7]" />
      <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4">
        {" "}
        {[0, 1, 2, 3].map((item, index) => (
          <button key={index} className="mr-2 ">
            <motion.div
              whileHover={{
                color: "#28267D",
              }}
            >
              <div className="overflow-hidden">
                <motion.img
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  }}
                  class="mx-auto"
                  src="https://img.freepik.com/free-vector/losing-weight-female-nutritionist-cartoon-character-slimming-weightloss-dieting-counting-calories-overweight-man-with-hamburger_335657-3590.jpg?t=st=1714904556~exp=1714908156~hmac=b6c3b14aa4bc86ecb5cd03132620d8009d544489e3fd03280a077fb8a6ca55bf&w=900"
                  alt="BMI Calculator"
                />
              </div>{" "}
              <h1 class="text-2xl mt-3 font-bold"> BMI Calculator </h1>{" "}
            </motion.div>{" "}
          </button>
        ))}{" "}
      </div>{" "}
    </div>
  );
}

export default ToolAndTrack;
