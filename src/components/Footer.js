import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faEnvelope,
  faPhone,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="col-md-6 col-lg-3 footer-social">
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget ante at nisi ultrices volutpat.
            </p>
          </div>
          <div className="col-md-6 col-lg-3 footer-social">
            <h3>Contact</h3>
            <address>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} /> Email:
                  contact@example.com
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} /> Phone: +1 (123) 456-7890
                </li>
                <li>
                  <FontAwesomeIcon icon={faMapMarker} /> Address: 123 Main
                  Street, City, Country
                </li>
              </ul>
            </address>
          </div>
          <div className="col-md-6 col-lg-3 footer-social">
            <h3>Follow</h3>
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 footer-social">
            <h3>Explore</h3>
            <ul>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>    
        </div>
        <div className="row">
          <p className="col-sm footer-copyright">
            &copy;{new Date().getFullYear()} Quick Fun Play, All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
