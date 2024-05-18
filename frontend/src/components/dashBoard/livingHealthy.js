import { Image } from "antd";
import React from "react";
// import mentalImage from "";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const data = [
  {
    title: "Mental Health",
    Image:
      "https://cdn.pixabay.com/photo/2024/03/13/12/45/woman-8630961_1280.jpg",
    url: "",
  },
  {
    title: "Diet & weight",
    Image:
      "https://cdn.pixabay.com/photo/2024/03/13/12/45/woman-8630961_1280.jpg",
    url: "/dietandweight",
  },
  {
    title: "healthy aging",
    Image:
      "https://cdn.pixabay.com/photo/2024/03/13/12/45/woman-8630961_1280.jpg",
    url: "",
  },
  {
    title: "FItness and exercise",
    Image:
      "https://cdn.pixabay.com/photo/2024/03/13/12/45/woman-8630961_1280.jpg",
    url: "/exercise",
  },
];

function LivingHealthy() {
  const navigate = useNavigate();

  return (
    <div className="mt-28">
      <h4 className="font-bold color-[#28267d] text-xl mt-4">
        {" "}
        LIVING HEALTHY{" "}
      </h4>{" "}
      <hr className=" my-3 h-3 color-[#cccce7]" />
      <div className="gap-4 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2">
        {" "}
        {data.map((item, index) => (
          <button key={index} onClick={() => navigate(item.url)}>
            <motion.div className="overflow-hidden">
              <motion.img
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut",
                  },
                }}
                src={item.Image}
                alt="mentalHealth"
              />{" "}
            </motion.div>{" "}
            <h3 className="font-bold text-3xl"> {item.title} </h3>{" "}
          </button>
        ))}{" "}
      </div>{" "}
    </div>
  );
}

export default LivingHealthy;
