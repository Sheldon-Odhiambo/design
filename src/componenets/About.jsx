import React from 'react'
import '../styles/About.css'
import ourwork from '../assets/campaign-creators-gMsnXqILjp4-unsplash.jpg'; 
import whoweare from '../assets/campaign-creators-gMsnXqILjp4-unsplash.jpg'; 
import mission from '../assets/campaign-creators-gMsnXqILjp4-unsplash.jpg'; 
import vision from '../assets/campaign-creators-gMsnXqILjp4-unsplash.jpg'; 
import Title from "./Title"
import Navbar from './Navbar'
import Footer from './Footer'




const About = () => {
  return (
    <>

<Navbar/>    
    <main className="about-main-container">  
    <Title title='About Us'/>

          
            <section className="about-how-we-work-container">
                <div className="about-how-we-work-text">

                    <h3>Design for Business Growth</h3>
                    <h2>How we Work</h2>
                    <p>The design thinking approach focuses on users/customers you’re creating for. It’s a human-centered
                        design for both products and services.</p>
                        <p> We will introduce the design thinking process to your team and work with your team to achieve
                            great products and services for your customers.</p>
                        </div>
                        <img src= {ourwork} alt="" />
            </section>

            <section className="about-who-we-are-container">
                <div className="about-who-we-are-text">

                    <h2>Who we are</h2>
                    <p>We are a human-centered design and innovation society. We can help you understand your
                        customers and build products around their needs.</p>
                        <p>Our role is to facilitate your process and skills using the design thinking process so that you can build
                            your products and services with customer focus. With human-centered design, we will foster
                            innovation strategies that grow your business and improve your bottom line.</p>
                        </div>
                        <img src={whoweare} alt="" />
            </section>

            <section className="about-mission-container">
                <div className="about-mission-text">

                    <h2>Our Mission</h2>
                    <p>To promote the use of design thinking as a problem-solving approach in Africa. We want to help
                        business leaders in Africa adopt and execute the human-centered design mindset and process. We
                        want to encourage pioneering leaders to foster organizational cultures that advocate for the
                        betterment of their customers, employees, and society.</p>
                        <p>Our final goal is to turn team members into design thinking coaches capable of human-centered
                            design. We believe that when you truly connect empathically with your customers – and design your
                            products and services from their perspective – you will find solutions that customers will love.</p>
                        </div>
                        <img src={mission} alt="" />
            </section>

            <section className="about-vision-container">
                <div className="about-vision-text">

                    <h2>Our Vision</h2>
                    <p>Our vision is to coagulate an ecosystem of leaders, organizations and businesses who are working
                        towards the same goal: designing experiences that delight millions of people, while also solving the
                        most pressing challenges in our communities and our planet.</p>

                        </div>
                        <img src={vision} alt="" />
            </section>


        </main>  
        <Footer/>
</>



  )
}

export default About
