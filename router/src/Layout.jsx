import React from 'react'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout