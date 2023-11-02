import React from 'react'
import '../styles/Navbar.css'
import logo from '../assets/Starburst Theme-2.png'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    
    <div className="header">
      <div className="container1">
            <div className="logo">

    
                <img src={logo} alt=""/>
            </div>

            <nav>
              
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About Us</NavLink>
                <NavLink to='/service'>Services</NavLink>
                <NavLink to='/resource'>Resources</NavLink>
                <NavLink to='/shop'>Shop</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            

           <div className="burger">
            <i className="fa-solid fa-bars"></i>
           </div> 
            </nav>

        </div>
    </div>

  )
}

export default Navbar
