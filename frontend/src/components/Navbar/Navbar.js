import React, { useEffect, useState } from 'react';
import { Layout, theme,Flex } from 'antd';
import { HashLink } from "react-router-hash-link"

import "./Navbar.css"
import Auth from '../../pages/Auth';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { Header } = Layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])


  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>

      <Layout className='fixed-top ' style={{ background: colorBgContainer }}>
        <Header className={isMobile ? "d-flex p-0" : " navbar p-0  my-auto "} >
        <Flex gap="large">
          <h1 className="logo my-auto ">Healthify</h1>
            <HashLink className='hideContent navlist ' smooth to="/#Home" >Home</HashLink>
            <HashLink className='hideContent navlist' smooth to="/#services">Services</HashLink>
            <HashLink className='hideContent navlist' smooth to="/#about">About</HashLink>
          </Flex>
          <div className='ms-auto p-2'>
            <Auth />
          </div>
        </Header>
      </Layout>
    </>

  )
}
export default Navbar