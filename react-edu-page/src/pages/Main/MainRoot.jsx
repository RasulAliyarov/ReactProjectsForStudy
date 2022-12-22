import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Main/Navbar/Navbar'
import Footer from '../../components/Main/Footer/Footer'

function MainRoot() {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer />
    </>

  )
}

export default MainRoot