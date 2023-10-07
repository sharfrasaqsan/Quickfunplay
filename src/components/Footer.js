import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./styles/Footer.css";

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
                  <FontAwesomeIcon icon={faEnvelope} /> Email:{" "}
                  <a href="mailto:sharfrasaqsan@gmail.com">
                    sharfrasaqsan@gmail.com
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} /> Phone:{" "}
                  <a href="tel:+94751230001">+94 75 123 0001</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faMapMarker} /> Address: Trincomalee,
                  Sri Lanka
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
                <Link to="/terms">
                  <span>Tearm of Services</span>
                </Link>
              </li>
              <li>
                <Link to="/privacy">
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/faq">
                  <span>FAQ</span>
                </Link>
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
