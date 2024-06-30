import React from 'react'
import Footer from './components/Footer'
import { Outlet } from 'react-router'
import { ScrollRestoration } from 'react-router-dom'
import Navbar from './components/Navbar'

function Layout() {
  return (
    <>
    <Navbar/>
    <ScrollRestoration />
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout