import React, { useState }  from 'react';
import { Layout, theme,Button,Menu } from 'antd';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
}from '@ant-design/icons'; 
import "./Navbar.css"
import NavList from '../Nav-List/NavList';
const { Header, Sider, Content } = Layout;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>

    <Layout className='navbar'>
    <Sider trigger={null} collapsible collapsed={collapsed}   collapsedWidth="0" bodyBg="#F5F5F5">
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
    </Sider>      <Button
            type="text"
            icon={collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              height: 64,
            }}
          />

{/* <NavList/> */}
    <div className="left logo"> Healthify</div>
    <div className="navbar right" style={{width:"50%"}}> 
      <div className="navlist">Home</div>
      <div className="navlist">About</div>
      <div className="navlist">Services</div></div>
    </Layout>
    </>

  )
}
export default Navbar