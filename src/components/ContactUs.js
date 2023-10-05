import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/ContactUs.css"; // Include your additional CSS file for styling if needed

function ContactUs() {
  return (
    <div className="container contact-us">
      <div className="row">
        <div className="col-md-5 contact-cont">
          <h2>
            <strong>Contact Us</strong>
          </h2>
          <div className="contact-info">
            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>Email: contact@example.com</p>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faPhone} />
              <p>Phone: +1 (123) 456-7890</p>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faMapMarker} />
              <p>Address: 123 Main Street, City, Country</p>
            </div>
          </div>
        </div>
        <div className="col-md-7 contact-cont">
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
