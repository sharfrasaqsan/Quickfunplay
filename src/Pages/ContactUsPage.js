import React from "react";
import Header from "../components/header";
import NewsLetterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"; // Import social media icons
import "./styles/ContactUs.css"; // Include your custom CSS file for additional styling

function ContactUs() {
  return (
    <div>
      <Header />
      <div className="container custom-contact-us">
        <div className="row custom-row">
          <div className="col-md-6">
            <h2 className="custom-contact-heading">Contact Us</h2>
            <p className="custom-contact-description">
              Have a question or need assistance? Reach out to us, and we'll be
              happy to help! Our dedicated team is here to provide you with the
              support you need.
            </p>
            <p className="custom-contact-info">
              Address: Trincomalee, Sri Lanka
            </p>
            <p className="custom-contact-info">
              Email:{" "}
              <a href="mailto:sharfrasaqsan@gmail.com">
                sharfrasaqsan@gmail.com
              </a>{" "}
            </p>
            <p className="custom-contact-info">
              Phone: <a href="+94751230001">+94 75 123 0001</a>{" "}
            </p>
            <p className="custom-contact-description">
              For any inquiries, feedback, or assistance, please feel free to
              contact us through the provided contact details. We are committed
              to responding to your queries promptly and efficiently.
            </p>
            <ul className="custom-contact-social">
              <li>
                <a
                  href="https://www.facebook.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <form className="custom-contact-form">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control custom-form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control custom-form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control custom-contact-textarea"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary custom-btn-primary"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <NewsLetterSignup />
      <Footer />
    </div>
  );
}

export default ContactUs;
