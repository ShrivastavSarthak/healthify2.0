import React, { useEffect, useState } from 'react';
import { Layout, theme, Button } from 'antd';


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
          <h1 className="logo my-auto ">Healthify</h1>

          <Button className='hideContent navlist' type='link' size='large' >Home</Button>
          <Button className='hideContent navlist' type='link' size='large'>About</Button>
          <Button className='hideContent navlist' type='link' size='large'>Services</Button>
          <div className='ms-auto p-2'>
            <Auth />
          </div>
        </Header>
      </Layout>
    </>

  )
}
export default Navbar