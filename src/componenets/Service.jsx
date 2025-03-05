import React from 'react'
import "../styles/Service.css"
import idea from '../assets/service1.jpg'; 
import employee from '../assets/service2.jpg'; 
import service from '../assets/service3.jpg'; 
import innovation from '../assets/service4.jpg'; 
import experience from '../assets/service5.jpg'; 
import build from '../assets/inno23.jpg';
import value from '../assets/value preposition design.jpg';
import starter from '../assets/starter.jpg'; 
import community from '../assets/dylan-gillis-KdeqA3aTnBY-unsplash.jpg'; 
import userEx from '../assets/ux-indonesia-WCID2JWoxwE-unsplash.jpg';
import Title from "./Title" 
import Footer from './Footer'                                                                                                                                                                                                       
import Navbar from './Navbar';








const Service = () => {
  return (

    <>

    <Navbar/>
  <div>
      <main className="service container">
      <Title title='Services'/>


      <div className="serviceMainContainer" id="meet-the-team">
        <div className="serviceBodyContainer">
            <h1>Let’s Work Together to <span> create Innovation and
              Business </span>Transformation</h1>
            
            <div className="service-Cards">
                <div className="serviceTeamCard">
                    <img src={idea} alt="" />
                    <h4>Innovation by design</h4>
                </div>
                <div className="serviceTeamCard">
                    <img src={employee}  alt=""/>
                    <h4>Value Preposition Design</h4>
                </div>
                <div className="serviceTeamCard">
                    <img src={service}  alt=""/>
                    <h4>Design Thinking Stater</h4>
                </div>
                <div className="serviceTeamCard">
                    <img src={innovation}  alt=""/>
                    <h4>Designf Thinking Community</h4>
                </div>
                <div className="serviceTeamCard">
                  <img src={experience}  alt=""/>
                  <h4>User Experience(UX) Research and Design</h4>
              </div>
            </div>
        </div>
    </div>
      
      <section className="service-innovation-container">
        <div className="innovation-text">

          
          <h2> <i class="fa-solid fa-lightbulb"></i> Innovation by Design  </h2>
          <p>This concept harnesses the power of design thinking and user-centric principles to drive organizational innovation. It centers on understanding user needs, fostering collaboration, and emphasizing aesthetics and ethics. By prioritizing these elements, organizations gain a competitive edge and promote a culture of continuous improvement."</p>
          <p>In conclusion, Innovation by Design is a tactical innovation methodology that incorporates <span>design thinking, user centricity, cross-functional collaboration, aesthetics, and ethical considerations.</span> Organizations can develop cutting-edge products that appeal to users and prosper in a market that is rapidly expanding by implementing these ideas into their processes.</p>
          
        </div>
        <img src={build} alt="" />
      </section>


      <section className="service-value-container">
        <div class="value-text">
          
          <h2> <i class="fa-solid fa-chart-bar"></i> Value Preposition Design </h2>
          <p>This strategic framework is all about putting customers at the forefront of your business. It employs visual aids like the Value Proposition Canvas to deeply understand what customers need and want.</p>
          <p> By continuously refining your offerings through an iterative process, you not only reduce the risk of launching products or services that miss the mark but also differentiate yourself in the market. It's a customer-centric approach that fosters innovation and success."</p>
          
        </div>
        <img src={value} alt="Photo by Headway "/>
      </section>


      <section className="service-starter-container">
        <div class="starter-text">

          <h2> <i class="fa-solid fa-hourglass-start"></i> Design Thinking Starter</h2>
          <p>"Design Thinking Starter" is a term that refers to a simplified or beginner's guide to the design thinking process. Design thinking is a human-centered approach to problem-solving that is widely used in various industries, and a "starter" is designed to help individuals or teams who are new to this methodology get started with its principles and methods.</p>
          <p>The key components of a Design Thinking Starter, include: <span>Emphathize, Define, Ideate, Prototype, Test Iterate</span></p>
          <p>In essence, a Design Thinking Starter is a beginner's guide that provides a simplified, step-by-step approach to understanding and applying design thinking principles to real-world challenges. It's a useful resource for individuals or teams looking to adopt a more human-centered and creative problem-solving approach in their work.</p>
        </div>
        <img src={starter} alt="Photo by Alvaro Reyes"/>
      </section>


      <section className="service-community-container">
        <div class="community-text">

          <h2> <i class="fa-solid fa-users"></i>Design Thinking Community</h2>
          <p>A "Design Thinking Community" is a group of individuals, often from diverse backgrounds and professions, who share an interest in and commitment to the principles and practices of design thinking. These communities serve as hubs for learning, collaboration, and innovation. </p>
          <p>Brief overview of design thinking starter include: <span>Learning and skill Development, SHaring Knowledge, Networking, Collaboration on Projects, Resource Sharing, Events and Meet ups Online PLatforms among many others.</span></p>
          <p>In summary, a Design Thinking Community is a collective of individuals who are passionate about design thinking and its application in various domains. These communities provide a platform for learning, collaboration, and networking, with the goal of driving innovation and problem-solving through human-centered design methodologies.</p>
        </div>
        <img src={community} alt="Photo by UX Indonesia "/>
      </section>


      <section className="service-design-container">
        <div className="design-text">

          <h2> <i class="fa-solid fa-laptop"></i>User Experience (UX) Research and Design </h2>
          <p>User Experience (UX) research and design is a multidisciplinary field focused on creating products, services, or systems that provide a positive and meaningful experience for users.</p>
          <p>Here's a brief overview of UX research and design: </p>
          <p>User Experience Research:<span>Understanding Users Needs,Usability Testing, Information Architecture, Persona Development, User Journeys </span> </p>
          <p>User Experience Design: <span>Information and Interaction Design, Visual Design, Interaction Design, Usability Testing, Prototype, User-Centered Design</span></p>
        </div>
        <img src={userEx} alt="Photo by UX Indonesia "/>
      </section>


  </main>


  </div>


<Footer/>

  </>

  )
}

export default Service
