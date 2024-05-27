// import { Image } from "antd";
// import React from "react";
// import { motion } from "framer-motion";

// function ToolAndTrack() {
//   return (
//     <div className="mt-28">
//       <h4 className="font-bold color-[#28267d] text-xl mt-4">
//         {" "}
//         TOOL, TRACKER AND CALCULATORS{" "}
//       </h4>{" "}
//       <hr className=" my-3 h-3 color-[#cccce7]" />
//       <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4">
//         {/* {" "}
//         {[0, 1, 2, 3].map((item, index) => (
//           <button key={index} className="mr-2 "> */}
//             <motion.div
//               whileHover={{
//                 color: "#28267D",
//               }}
//             >
//               <div className="overflow-hidden">
//                 <motion.img
//                   whileHover={{
//                     scale: 1.1,
//                     transition: {
//                       duration: 0.4,
//                       ease: "easeOut",
//                     },
//                   }}
//                   class="mx-auto"
//                   src="https://img.freepik.com/free-vector/losing-weight-female-nutritionist-cartoon-character-slimming-weightloss-dieting-counting-calories-overweight-man-with-hamburger_335657-3590.jpg?t=st=1714904556~exp=1714908156~hmac=b6c3b14aa4bc86ecb5cd03132620d8009d544489e3fd03280a077fb8a6ca55bf&w=900"
//                   alt="BMI Calculator"
//                 />
//               </div>{" "}
//               <h1 class="text-2xl mt-3 font-bold"> BMI Calculator </h1>{" "}
//             </motion.div>{" "}
//           {/* </button> */}
//         {/* ))}{" "} */}
//       </div>{" "}
//     </div>
//   );
// }

// export default ToolAndTrack;

// -----------------
import { Image } from "antd";
import React from "react";
// import mentalImage from "";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const data = [
  {
    title: "Bmi Calculator",
    Image:
      "https://img.freepik.com/free-vector/losing-weight-female-nutritionist-cartoon-character-slimming-weightloss-dieting-counting-calories-overweight-man-with-hamburger_335657-3590.jpg?t=st=1714904556~exp=1714908156~hmac=b6c3b14aa4bc86ecb5cd03132620d8009d544489e3fd03280a077fb8a6ca55bf&w=900",
    url: "/bmicalc",
  },
  {
    title: "Bmr Calculator",
    Image:
      "https://plus.unsplash.com/premium_vector-1682301141424-139bf5d23efb?bg=FFFFFF&w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmF0fGVufDB8fDB8fHww",
    url: "/bmrcalc",
  },
  {
    title: "Fat Calculator",
    Image:
      "https://plus.unsplash.com/premium_vector-1682310614126-4c5193a48b3d?bg=FFFFFF&w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGh1bWFufGVufDB8fDB8fHww",
    url: "/fatcalc",
  },
  {
    title: "Water Calc",
    Image:
      "https://plus.unsplash.com/premium_vector-1682269627498-9bc139ab0daa?bg=FFFFFF&w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHdhdGVyJTIwaW50YWtlfGVufDB8fDB8fHww",
    url: "/watercalc",
  },
];

function ToolAndTrack() {
  const navigate = useNavigate();

  return (
    <div className="mt-28">
      <h4 className="font-bold color-[#28267d] text-xl mt-4">
        {" "}
        TOOL, TRACKER AND CALCULATORS
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

export default ToolAndTrack;
