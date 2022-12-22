import React from 'react'
import "./Navbar.scss"
import { Link } from "react-router-dom"
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
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/aboutpage">About</Link>
              </li>
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