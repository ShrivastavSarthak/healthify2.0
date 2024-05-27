import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#001529] flex justify-between items-center w-full h-[10%] p-3">
      <h2 className="font-bold text-2xl text-[#F5C23B]">
        {" "}
        Healthify for doctor{" "}
      </h2>{" "}
      <button className=" py-2 px-4 font-bold bg-slate-300 hover:bg-[#F5C23B] rounded-lg duration-150 ">
        Log out{" "}
      </button>{" "}
    </div>
  );
};

export default Navbar;
