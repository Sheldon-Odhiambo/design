import React, { useRef, useEffect, useState } from 'react';
import '../styles/Home.css';
import back1 from '../assets/back1.jpg';
import back2 from '../assets/back2.jpg';
import back3 from '../assets/back3.jpg';
import back4 from '../assets/back4.jpg';

import collaboration from '../assets/collaboration.png'; 
import transformation from '../assets/digital-transformation.png'; 
import profit from '../assets/profit.png'; 
import empowering from '../assets/empowering.png'; 
import Navbar from './Navbar';
import Typed from 'typed.js';
import Footer from './Footer';
import ContactForm from './ContactForm';

// Array of background images
const backgroundImages = [back1, back2, back3, back4];

const Home = () => {
  const el = useRef(null);
  const [currentBackground, setCurrentBackground] = useState(backgroundImages[0]);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Empathy', 'Divergent and Convergent Thinking', 'Iteration Process'],
      typeSpeed: 30,
      startDelay: 1200,
      backSpeed: 20,
      backDelay: 2500,
      loop: true,
      cursorChar: '|',
      contentType: 'html',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => {
        const currentIndex = backgroundImages.indexOf(prev);
        return backgroundImages[(currentIndex + 1) % backgroundImages.length];
      });
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className='container-home' style={{ backgroundImage: `url(${currentBackground})` }}>
        <div className="container-hero">
          <h1>Helping Africa Stay Ahead of the Innovation Curve</h1>
          <h2>Design Thinking! <span ref={el} className="change-content"></span></h2>
          <h3>Why Design Thinking Process?</h3>
        </div>

        <div className="process">
          <ul className="benefits">
            <li>
              <img src={collaboration} alt="Promote Collaboration" />
              <span>Promote Collaboration</span>
            </li>
            <li>
              <img src={transformation} alt="Transform Your Business" />
              <span>Transform Your Business</span>
            </li>
            <li>
              <img src={profit} alt="Boost Profits" />
              <span>Boost Profits</span>
            </li>
            <li>
              <img src={empowering} alt="Empower Your Team" />
              <span>Empower Your Team</span>
            </li>
          </ul>
          <p>Let's partner to create business transformation through innovation</p>
        </div>
      </div>

      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
