import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

function Navbar() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Baş səhifə</Link>
        </li>
        <li>
          <Link to="siyaset">Siyasət</Link>
        </li>
        <li>
          <Link to="/iqtisadiyat">İqtisadiyyat</Link>
        </li>
        <li>
          <Link to="/cemiyyet">Cəmiyyət</Link>
        </li>
        <li>
          <Link to="/biznes">Şou-biznes</Link>
        </li>
        <li>
          <Link to="/muharibe">Müharibə</Link>
        </li>
        <li>
          <Link to="#">İdman</Link>
        </li>
        <li>
          <Link to="#">Kriminal</Link>
        </li>
        <li>
          <Link to="#">Mədəniyyət</Link>
        </li>
      </ul>
    </header>
  )
}

export default Navbar