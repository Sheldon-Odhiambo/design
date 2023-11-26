import React from 'react'
import '../styles/ContactForm.css'

const ContactForm = () => {
  return (

    <section className="contacts">

    
    <p className='contact-paragraph'>Any Challange or remarks? Just write us a message!</p>
    
    {/* <p style="margin: -4rem auto 3rem;text-align:center; margin-top: 2rem;">Any question or remarks? Just write us a message!</p> */}
    
    <div className="contact-main-container">
        <div className="contact-info-container">
            <h2>Contact Information</h2>
            <p>Fill up the form and a member of the team will get back to you within 24hrs </p>
    
        <div className="contact-social-links">
            <a href="">
                <div className="contact-icon-background"><i class="fa-brands fa-facebook-f"></i></div><p>designthinking association</p>
            </a>
            <a href="">
                <div className="contact-icon-background"><i class="fa-brands fa-instagram"></i></div><p>@design_thinking</p>
    
            </a>
            <a href="">
                <div className="contact-icon-background"><i class="fa-brands fa-x-twitter"></i></div><p>designthinking</p>
    
            </a>
            <a href="">
                <div className="contact-icon-background"><i class="fa-regular fa-envelope"></i></div><p>designthinking@gmail.com</p>
    
            </a>
            <a href="">
                <div className="contact-icon-background"><i class="fa-solid fa-phone"></i></div><p>+25470001254</p>
    
            </a>
    
        </div>
        </div>
        <form  className="contact-form">
            <fieldset>    
                <label for="name">Full name</label>
                <input type="text" placeholder="name" name="name"/>
            </fieldset>
            <fieldset>
                <label for="email">Email</label>
                <input type="email" placeholder="name@gmail.com" name="email"/>
            </fieldset> 
            <fieldset>
                <label for="phone">Phone</label>
                <input type="text" placeholder="+254" name="phone number"/>
            </fieldset>
            <fieldset>
                <label for="subject">Subject</label>
                <input type="text" placeholder="subject" name="Subject"/>
            </fieldset>
            <fieldset>
                <label>Your Challange</label>
                <textarea name="Message" placeholder="write your challange here" ></textarea>
            </fieldset>
            <button type="submit">Submit</button>
            
    
        </form>
    </div>
    </section>
    

  )
}

export default ContactForm
