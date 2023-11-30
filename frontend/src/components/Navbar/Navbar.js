import React, { useContext, } from "react";
import { Button, Layout, theme } from "antd";
import "./Navbar.css";
import Auth from "../../pages/Auth";
import useMobile from "../../hooks/setMobileView";
import { NavLinks } from "./NavLinks";
import { AuthContext } from "../../shared/context/auth-context";

const Navbar = () => {
  const auth = useContext(AuthContext);
  const { Header } = Layout;
  const mobileView = useMobile();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout className="fixed-top " style={{ background: colorBgContainer }}>
        <Header className={mobileView ? "d-flex p-0" : " navbar p-0  my-auto "}>
          <NavLinks />
          <div className="ms-auto p-2">
          {
            !auth.isLoggedIn && <Auth />  
          }
          {
            auth.isLoggedIn && <Button onClick={()=>auth.logout()} >logout</Button>
          }
          </div>
        </Header>
      </Layout>
    </>
  );
};
export default Navbar;
