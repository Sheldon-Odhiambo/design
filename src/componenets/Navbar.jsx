import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/Logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;
    const footer = document.getElementById('footer');
    const footerTop = footer?.getBoundingClientRect().top + window.scrollY;
    const windowHeight = window.innerHeight;

    if (currentScrollY > lastScrollY && currentScrollY + windowHeight < footerTop) {
      // Scrolling down and not at footer
      setIsVisible(false);
    } else {
      // Scrolling up or at footer
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className={`navbar-container ${showNav ? 'open' : ''} ${isVisible ? 'visible' : 'hidden'}`}>
      <div className='menubar-container'>
        <div className='logo-container'>
          <img src={logo} alt='Logo' />
        </div>

        <div className='burger' onClick={() => setShowNav(!showNav)}>
          <i className={`fa-solid ${showNav ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>

        <nav className={showNav ? 'open' : ''}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About Us</NavLink>
          <NavLink to='/service'>Services</NavLink>
          <NavLink to='/resource'>Resource</NavLink>
          <NavLink to='/shop'>Shop</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
