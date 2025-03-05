import React, {useRef, useEffect} from 'react'
import '../styles/Home.css'
import collaboration from '../assets/collaboration.png'; 
import transformation from '../assets/digital-transformation.png'; 
import profit from '../assets/profit.png'; 
import empowering from '../assets/empowering.png'; 
import Navbar from './Navbar'
import Typed from 'typed.js'
import Footer from './Footer'
import Contact from './Contact'
import ContactForm from './ContactForm'



const Home = () => {

    const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Emphathy', 'Divergent and Convergent Thinking', 'Iteration Process'],
      stringsElement: null,
      // typing speed
      typeSpeed: 30,
      // time before typing starts
      startDelay: 1200,
      // backspacing speed
      backSpeed: 20,
      // time before backspacing
      backDelay: 2500,
      // loop
      loop: true,
      // false = infinite
      // loopCount: 5,
// character for cursor
      cursorChar: '|',
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: 'html',
      // call when done callback function
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
 
  return (
    <>
    <Navbar/>
    <div className='container-home'>
        <div className="container-hero">

        
      <h1>Helping Africa Stay Ahead of the Innovation curve</h1>
      <h2>Design Thinking!  <span ref={el}className="change-content"></span></h2>
      <h3>Why design thinking Process?</h3>
     </div>

    <div className="process">
    <ul className="benefits">
        <li>
            <img src={collaboration} alt="" />
            <span>Promote Collaboration</span>
        </li>
        <li>
            <img src={transformation} alt="" />
            <span>Transform Your Business</span>
        </li>
        <li>
            <img src={profit} alt="" />
            <span>Boost Profits</span>
        </li>
        <li>
            <img src={empowering} alt="" />
            <span>Empower your Team</span>
        </li>
    </ul>
    <p>Let's partner to create business transformation through innovation</p>


    </div>

    </div>
    
    <ContactForm/>
    
    <Footer/>
</>

  )
}


export default Home