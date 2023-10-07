import React, { useEffect } from "react";
import Header from "../components/header";
import NewsLetterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";
import "./styles/ContactUs.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <div className="container custom-contact-us">
        <h2 className="custom-contact-heading text-center">Contact Us</h2>

        <div className="row custom-row">
          <h3 className="custom-contact-sub-heading">Get in Touch with Us</h3>
          <p className="custom-contact-description">
            Thank you for considering reaching out to us! At Quick Fun Play, we
            value your inquiries, feedback, and any comments you may have. We're
            dedicated to providing excellent customer service and ensuring your
            experience with us is a positive one.
          </p>

          <p className="custom-contact-info">
            Address:{" "}
            <a href="https://maps.app.goo.gl/4FhYZC8AUex8jrLTA">
              Trincomalee, Sri Lanka
            </a>
          </p>
          <p className="custom-contact-info">
            Email:{" "}
            <a href="mailto:sharfrasaqsan@gmail.com">sharfrasaqsan@gmail.com</a>{" "}
          </p>
          <p className="custom-contact-info">
            Phone: <a href="+94751230001">+94 75 123 0001</a>{" "}
          </p>
          <p className="custom-contact-description">
            Please feel free to use any of the contact methods above to get in
            touch with us. Whether you have questions about our products, need
            assistance with an order, or want to share your thoughts, our team
            is here to help.
          </p>

          <h3 className="custom-contact-sub-heading">Our Commitment</h3>
          <p className="custom-contact-description">
            At Quick Fun Play, your happiness and enjoyment are our top
            priorities. We are committed to:
          </p>
          <ul className="custom-contact-ul">
            <li>
              <span>Swift Responses:</span> Providing prompt responses to your
              inquiries to ensure you receive the information you need when you
              need it.
            </li>
            <li>
              <span>Guidance and Support:</span> Offering guidance and support
              on our games, services, and the game-playing experience. We're
              here to make sure your gaming adventure is fantastic.
            </li>
            <li>
              <span>Issue Resolution:</span> Addressing any concerns or
              challenges you may encounter with our games or services. Your
              feedback helps us refine and enhance your gaming experience.
            </li>
            <li>
              <span>Continuous Advancement:</span> Listening to your valuable
              feedback and continuously improving our games and services based
              on your insights. Your opinions hold great significance for us.
            </li>
            <li>
              <span>Community Engagement:</span> We believe in fostering a
              strong gaming community. Quick Fun Play regularly hosts
              interactive events, tournaments, and contests to bring our players
              together. We encourage you to participate, showcase your skills,
              and build lasting connections with fellow gamers.
            </li>
            <li>
              <span>Transparency:</span> At Quick Fun Play, we are committed to
              transparency in all our operations. If you have any questions
              regarding our pricing, terms of service, or any aspect of our
              games, we're here to provide clear and straightforward answers. We
              want you to understand the value and fairness we bring to your
              gaming experience.
            </li>
            <li>
              <span>Exclusive Rewards:</span> As a token of our appreciation for
              choosing Quick Fun Play, we offer exclusive rewards and discounts
              to our loyal gamers. Look forward to surprise gifts, early access
              to new game releases, and special promotions. Your dedication to
              gaming deserves to be rewarded!
            </li>
          </ul>
        </div>

        <div className="row custom-row">
          <div className="col-md-6">
            <h3 className="custom-contact-sub-heading">Response Time</h3>
            <p className="custom-contact-description">
              We understand that your gaming time is precious. Our team strives
              to respond to all inquiries within 24-48 hours, excluding weekends
              and holidays. For pressing matters or immediate assistance, please
              consider reaching out to us by phone during our business hours.
            </p>

            <h3 className="custom-contact-sub-heading">Business Hours</h3>
            <ul className="custom-contact-ul">
              <li>
                <span>Monday to Friday:</span> 9:00 AM - 5:00 PM (Game Time
                Zone)
              </li>
              <li>
                <span>Saturday:</span> 10:00 AM - 4:00 PM (Game Time Zone)
              </li>
              <li>
                <span>Sunday:</span> Closed
              </li>
            </ul>

            <p className="custom-contact-description">
              <i>
                Please note that our business hours are subject to occasional
                updates and holiday closures, so check our website for the
                latest information. Our goal is to be available when you're
                ready to embark on a gaming journey.
              </i>
            </p>
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

        <div className="row custom-row">
          <h3 className="custom-contact-sub-heading">
            Connect with Us on Social Media
          </h3>
          <p className="custom-contact-description">
            Stay updated and connect with us on our social media platforms:
          </p>

          <div className="costom-contact-social col-md-3">
            <div className="custom-contact-info">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
            </div>
            <div className="custom-contact-info">
              <a href="#">
                {" "}
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </a>
            </div>
            <div className="custom-contact-info">
              <a href="#">
                {" "}
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </div>
          </div>

          <p className="custom-contact-description">
            Join our gaming community on social media for the latest game
            releases, exclusive promotions, and opportunities to connect with
            fellow gamers. We love hearing your gaming stories and sharing in
            the fun!
          </p>

          <h3 className="custom-contact-sub-heading">Your Feedback Is Gold</h3>
          <p className="custom-contact-description">
            We genuinely appreciate your interest in Quick Fun Play, and we look
            forward to assisting you with any inquiries or gaming adventures.
            Your feedback is like treasure to us, helping us level up our gaming
            offerings and ensuring you have the best gaming experiences.
          </p>
          <p className="custom-contact-description">
            Before reaching out, consider checking our{" "}
            <Link to="/faq">
              <strong>Frequently Asked Questions (FAQ)</strong>
            </Link>{" "}
            page. It's your portal to answers for common gaming questions and
            could save you time in your quest for information. Our FAQ is
            continuously updated to cater to your most common gaming
            curiosities.
          </p>
          <p className="custom-contact-description">
            Thank you for choosing Quick Fun Play for your gaming adventures. We
            are here to serve you, and your journey with us promises to be
            filled with quick, fun, and exciting experiences.
          </p>
          <p className="custom-contact-description">
            Feel free to embark on a gaming adventure with Quick Fun Play
            anytime. We're just a message or a call away!
          </p>
        </div>
      </div>

      <NewsLetterSignup />
      <Footer />
    </div>
  );
}

export default ContactUs;
