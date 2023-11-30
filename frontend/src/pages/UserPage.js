import React, { Fragment } from "react";
import { Layout } from "antd";
import DashBoard from "../components/dashBoard/DashBoard";

const UserPage = () => {
  const { Content } = Layout;
  return (
    <Fragment>
      <Layout hasSider>
        <Content className="pt-5 mt-4">
          <DashBoard/>
        </Content>
      </Layout>
    </Fragment>
  );
};

export default UserPage;
