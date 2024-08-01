import React from 'react'
import './Navbar.css'
import assets from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      
      <img src={assets.PrimaryLogo} alt="logo" className="logo" />

      <ul className="navbar-menu">
        <li className="h4">Company</li>
        <li className="h4">Services</li>
        <li className="h4">Technologies</li>
        <li className="h4">Products</li>
      </ul>
      
      
    </div>
  )
}

export default Navbar

