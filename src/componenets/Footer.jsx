import React from 'react'
import '../styles/Footer.css'
import contactl from '../assets/contact.png'

const Footer = () => {
  return (

    <footer>
    <div className='footer-container'>
      <div className='footer-section'>
        <h3 className='footer-section-title'>About Us</h3>
        <section className='footer-section-title-underline'>
          <hr className='underline-orange' />
          <hr className='underline-grey' />
        </section>
        <img src= {contactl} className='footer-logo'alt='design thinking logo'/>
        <p>
          At design thinking association, we help you understand your customers and build products around their needs.
        </p>
        <section className='footer-socials'>
          <a
            href='https://web.facebook.com/profile.php?id=100091794979978'
            className='footer-icon-container'
            target='_blank'
          >
            <i className='fa-brands fa-facebook-f'></i>
          </a>
          <a
            href='https://twitter.com/interfoxInc'
            className='footer-icon-container'
            target='_blank'
          >
            <i className='fa-brands fa-twitter'></i>
          </a>
          <a
            href='https://www.linkedin.com/company/interfox-networks-limited/'
            className='footer-icon-container'
            target='_blank'
          >
            <i className='fa-brands fa-linkedin-in'></i>
        </a>
          <a
            href='mailto:sc3s@gmail.com'
            className='footer-icon-container'
          >
            <i className='fa-solid fa-envelope'></i>
          </a>
          <a href='tel:+2547246558548' className='footer-icon-container'>
            <i className='fa-solid fa-phone'></i>
          </a>
        </section>
      </div>
      <div className='footer-section'>
        <h3 className='footer-section-title'>Company</h3>
        <section className='footer-section-title-underline'>
          <hr className='underline-orange' />
          <hr className='underline-grey' />
        </section>
        <section className='footer-links'>
          <a href='./index.html'>Home</a>
          <a href='./about.html'>About Us</a>
          <a href='./services.html'>Services</a>
          <a href='./resource.html'>Resources</a>
          <a href='./contact.html'>Contact</a>
        </section>
      </div>
      <div className='footer-section'>
        <h3 className='footer-section-title'>Contacts</h3>
        <section className='footer-section-title-underline'>
          <hr className='underline-orange' />
          <hr className='underline-grey' />
        </section>
        <address className='footer-links'>
          <p>Africa Nazarene University</p>
          <p>Nairobi, Kenya</p>
          <p>+254 700 002 052</p>
        </address>
      </div>
      <div className='footer-section'>
        <h3 className='footer-section-title'>Useful Links</h3>
        <section className='footer-section-title-underline'>
          <hr className='underline-orange' />
          <hr className='underline-grey' />
        </section>
        <section className='footer-links'>
          <a href='/privacy-policy'>Privacy Policy</a>
          <a href='/terms of use'>Terms of Use</a>
          <a href='/covid-19-pandemic'>Covid-19 Response</a>
          <a href='/auth/login'>Staff Login</a>
        </section>
      </div>
    </div>
    <hr id='footer-copyright-seperator' />
    <section className='footer-copyright'>
      Copyright 2023 &copy; design thinking association
    </section>
  </footer>


  )
}

export default Footer
