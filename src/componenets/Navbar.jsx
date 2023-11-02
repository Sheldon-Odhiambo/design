import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/Starburst Theme-2.png';
import { NavLink } from 'react-router-dom';

<<<<<<< HEAD
    
                <img src={logo} alt=""/>
            </div>

            <nav>
              
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About Us</NavLink>
                <NavLink to='/service'>Services</NavLink>
                <NavLink to='/resource'>Resources</NavLink>
                <NavLink to='/shop'>Shop</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            
=======
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
>>>>>>> 1e4bb6573c788c1ec73909bd8c1ce8a61d9691f7

  return (
    <div className={`navbar-container ${showNav ? 'open' : ''}`}>
      <div className='menubar-container'>
        <div className='logo-container'>
          <img src={logo} alt='' />
        </div>

        <div className='burger' onClick={() => setShowNav(!showNav)}>
          <i className={`fa-solid ${showNav ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>

        <nav className={showNav ? 'open' : ''}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About Us</NavLink>
          <NavLink to='/service'>Services</NavLink>
          <NavLink to='/resources'>Resources</NavLink>
          <NavLink to='/shop'>Shop</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
