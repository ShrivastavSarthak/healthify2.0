
import React, { useEffect } from "react";
import { message } from "antd";

export const Message = (props) => {
  const [messageApi, constextHolder] = message.useMessage();

  useEffect(() => {
    messageApi.open({
      type: 'error',
      content: props.mess
    });
  }, [messageApi, props.mess]);

  return (
    <React.Fragment>
      {constextHolder}
    </React.Fragment>
  );
}