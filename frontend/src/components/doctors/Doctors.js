import { Avatar, Button } from "antd";
import React, { Fragment, useState } from "react";

const Doctors = () => {

  const [isAppointment, setIsAppointment] = useState(false)
  const [isViewMore, setViewMore] = useState(false)


  const handleCloseAppointment = ()=>{
    setIsAppointment(true)
  }
  
  
  return (
    <Fragment>
      <div>
        <h4 className="font-bold color-[#28267d] text-xl mt-4">
          {" "}
          Your doctors{" "}
        </h4>{" "}
        <hr className=" my-3 h-3 color-[#cccce7]" />
        <div className="gap-5 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1">
          {" "}
          {new Array(3).fill(0).map((item, index) => {
            return (
              <div className="p-3 rounded-lg shadow-md border-gray-400 border-r-2 ">
                <center>
                  <Avatar size="large" />
                  <h4 className="mt-2"> Doctor 's Name</h4>{" "}
                  <h4 className="mt-2"> specialist </h4>{" "}
                  <h4 className="mt-2"> Year of exp. </h4>{" "}
                </center>{" "}
                <div className="flex justify-between mt-2">
                  <Button onClick={handleAppointment}> Book appointment </Button>{" "}
                  <Button onClick={handleViewMore}> View more </Button>{" "}
                </div>{" "}
              </div>
            );
          })}{" "}
        </div>{" "}
        <h4 className="font-bold color-[#28267d] text-xl mt-4">
          {" "}
          New doctors{" "}
        </h4>{" "}
        <hr className=" my-3 h-3 color-[#cccce7]" />
        <div className="gap-5 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1">
          {" "}
          {new Array(3).fill(0).map((item, index) => {
            return (
              <div className="p-3 rounded-lg shadow-md border-gray-400 border-r-2 ">
                <center>
                  <Avatar size="large" />
                  <h4 className="mt-2"> Doctor 's Name</h4>{" "}
                  <h4 className="mt-2"> specialist </h4>{" "}
                  <h4 className="mt-2"> Year of exp. </h4>{" "}
                </center>{" "}
                <div className="flex justify-between mt-2">
                  <Button> Book appointment </Button>{" "}
                  <Button> View more </Button>{" "}
                </div>{" "}
              </div>
            );
          })}{" "}
        </div>{" "}
      </div>{" "}
    </Fragment>
  );
};

export default Doctors;
