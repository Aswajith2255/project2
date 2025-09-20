import React from 'react'

import logo from '../Assets/logo.png'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
    <div className='nav-left'>
       <img className='logo' src={logo} alt="" />
    </div>
    <div className='nav-right'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Service</li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar
