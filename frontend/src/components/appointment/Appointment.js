import { Button, Card, DatePicker, Input } from "antd";
import React from "react";

const Appointment = () => {
  return (
    <div className="my-[5%]">
      <center>
        <Card>
          <form>
            <div className="flex gap-5">
              <DatePicker />
              <Input multiple placeholder="enter the reason" />
            </div>{" "}
            <Button className="mt-3"> Submit </Button>{" "}
          </form>{" "}
        </Card>{" "}
      </center>{" "}
    </div>
  );
};

export default Appointment;
