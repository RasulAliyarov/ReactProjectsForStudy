import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"
// import { Link } from "react-router-dom"
function Navbar() {
  return (
    <>
      <header className='header'>
        <div className="header__wrapper container">
          <div className="header__wrapper__left">
            <span>JUMMY</span>
          </div>
          <div className="header__wrapper__middle">
            <ul>
              <li><Link to="/">Site</Link></li>
              <li><Link to="/admin">Dashboard</Link></li>
              <li><Link to="/admin/products">Products</Link></li>
              <li><Link to="/admin/supplies">Supplies</Link></li>
            </ul>
          </div>
          <div className="header__wrapper__right">
            <input type="text" placeholder='Search' />
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar