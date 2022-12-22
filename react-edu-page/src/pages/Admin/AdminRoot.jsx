import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Admin/Navbar/Navbar'
import Footer from '../../components/Admin/Footer/Footer'

function AdminRoot() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default AdminRoot