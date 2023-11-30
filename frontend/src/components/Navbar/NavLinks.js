import { Flex } from 'antd'
import React, { Fragment, useContext } from 'react'
import { HashLink } from 'react-router-hash-link'
import Slider from '../Slider/Slider'
import { AuthContext } from '../../shared/context/auth-context'

export const NavLinks = () => {
    const auth =useContext(AuthContext)
  return (
    <Fragment>
    <Flex gap="large">
    {auth.isLoggedIn && <Slider />}
    <h1 className="logo my-auto ">Healthify</h1>
    {!auth.isLoggedIn && <HashLink className="hideContent navlist " smooth to="/#Home">
    Home
    </HashLink>}
    {!auth.isLoggedIn && <HashLink className="hideContent navlist" smooth to="/#services">
    Services
    </HashLink>}
    {!auth.isLoggedIn && <HashLink className="hideContent navlist" smooth to="/#about">
    About
    </HashLink>}
  </Flex>

    </Fragment>
  )
}
