import React, { Fragment, useState } from "react";
import { Button, Drawer, Flex } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Slider.css"
const Slider = () => {
  // const isMobile = useMobile();
  const [open, setIsOpen] = useState(false);

  const setDrawer = () => {
    setIsOpen(!open);
  };

  return (
    <Fragment>
      <Button
        className="mt-3 ms-2"
        size
        type="primary"
        onClick={setDrawer}
        icon={!open ? <MenuOutlined /> : <CloseOutlined />}
      />
      <Drawer
        style={{
          backgroundColor: "#001529",
        }}
        autoFocus={true}
        className="mt-5 "
        closable={false}
        onClose={setDrawer}
        width={"11em"}
        placement="left"
        open={open}
      >
        <Flex vertical={true}>
          <Link className="p-1 mt-2 mx-2 Button">Dashboard</Link>
          <Link className="p-1 mt-2 mx-2 Button">Apointment</Link>
          <Link className="p-1 mt-2 mx-2 Button">schedule</Link>
          <Link className="p-1 mt-2 mx-2 Button">Doctors</Link>
        </Flex>
      </Drawer>
    </Fragment>
  );
};

export default Slider;
