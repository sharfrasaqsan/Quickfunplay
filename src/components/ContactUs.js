import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/ContactUs.css"; // Include your additional CSS file for styling if needed

function ContactUs() {
  return (
    <div>
      <header className="contactus-header">
        <h2 className="contactus-title">
          <strong>Contact Us</strong>
        </h2>
      </header>

      <div className="container margin-btm">
        <div className="row">
          <div className="col-md-5 contact-cont">
            <div className="contact-info">
              <p>
                Your experience
                matters to us, and we're here to ensure it's nothing short of
                exceptional. Whether you have questions, suggestions, or simply
                want to share your gaming stories, our virtual doors are always
                open. Our dedicated support team is available 24/7 to provide
                swift responses and assistance whenever you need it.<br /><br /> Your
                feedback drives our continuous improvement, making your gaming
                adventures even more thrilling. Join our community, drop us a
                message, and let's make gaming history together. Your voice
                matters, and at Quick Fun Play, you're at the heart of it all.
              </p>
              <div className="info-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>
                  Email:{" "}
                  <a href="mailto:sharfrasaqsan@gmail.com">
                    <b>sharfrasaqsan@gmail.com</b>
                  </a>
                </p>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faPhone} />
                <p>
                  Phone:{" "}
                  <a href="tel:+94751230001">
                    <b>+94 75 123 0001</b>
                  </a>
                </p>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faMapMarker} />
                <p>
                  Address:{" "}
                  <a href="https://maps.app.goo.gl/4FhYZC8AUex8jrLTA">
                    <b>Trincomalee, Sri Lanka</b>
                  </a>
                </p>
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
    </div>
  );
}

export default ContactUs;
