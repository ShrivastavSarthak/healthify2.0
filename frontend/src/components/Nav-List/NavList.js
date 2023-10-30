import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'; 
import Home from "../../pages/Home";
import { Layout, Menu, Button, theme } from 'antd';
const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>

      <Sider trigger={null} collapsible collapsed={collapsed}   collapsedWidth="0" bodyBg="#F5F5F5">
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon:  <HomeIcon />,
              label: 'Home',
            },
            {
              key: '2',
              icon: <InfoIcon />,
              label: 'About',
            },
            {
              key: '3',
              icon: <ArticleIcon />,
              label: 'Services',
            },
          ]}
        />
        <h2>Healthify</h2>
      </Sider>


          <Button
            type="text"
            icon={collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              height: 64,
            }}
          />

    </Layout>
  );
};
export default App;





