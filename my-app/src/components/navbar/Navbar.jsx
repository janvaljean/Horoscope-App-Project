import React from 'react'
import "./Navbar.scss"
import logo from "../../img/logo.png"

const Navbar = () => {
  return (
    <div className='container'>
      <img className="logo" src={logo} alt=""/>
      <div className="navLinks">
        <div className='Links'>
          <a className="nav-link active"  href="#">HOROSCOPE</a>
          <a className="nav-link" href="#">DAILY</a>
          <a className="nav-link" href="#">TAROT</a>
          <a className="nav-link" href="#">ARTICLE</a>
          <a className="nav-link" href="#">CONTACT</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
