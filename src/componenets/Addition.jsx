import React from "react";
import "../styles/Addition.css";
import employeeImage from "../assservice 1-1.jpg";

const Addition = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1>Secure Your Employee Advantage</h1>
        <div className="image-card">
        <img src={employeeImage} alt="Employee" className="contact-image" />
          <div className="info-box">
            <p>Offer letter has been sent to <strong>Jennifer Adams</strong></p>
            <button>View Letter</button>
          </div>
          <div className="progress-box">
            <p>Interview Process</p>
            <div className="progress-circle">70%</div>
            <button>View Details</button>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <form className="contact-form">
          <div className="input-group">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Phone number" required />
          </div>
          <input type="text" placeholder="Job title" required />
          <div className="input-group">
            <input type="text" placeholder="Company name" required />
            <select required>
              <option value="">Employee Count</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-100">51-100</option>
              <option value="100+">100+</option>
            </select>
          </div>
          <select required>
            <option value="">Business Sector</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
          </select>
          <div className="terms">
            <input type="checkbox" required />
            <label>I consent to the terms and conditions stated in the <a href="#">Privacy Policy</a></label>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Addition;
