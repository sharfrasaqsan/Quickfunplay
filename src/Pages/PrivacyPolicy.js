import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Header from "../components/header";
import NewsLetterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";
import "./styles/PrivacyPolicy.css"; // Import custom CSS file

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />

      <header className="privacy-header">
        <Container>
          <h1 className="privacy-title">
            <strong>Privacy Policy</strong>
          </h1>
          <p className="privacy-lead">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you use
            our website.
          </p>
        </Container>
      </header>

      <Container className="privacy-content">
        <Row>
          <Col>
            <h2>1. Information We Collect</h2>
            <p>
              We may collect personal information that you provide directly to
              us, such as your name, email address, and any other information
              you choose to provide. Additionally, we may collect information
              about your usage of our website, including your IP address,
              browser type, and device information.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We may use your information for various purposes, including to
              provide and maintain our services, communicate with you, improve
              our website, and respond to your requests or inquiries. We may
              also use your information to personalize your experience and to
              provide you with targeted content and advertisements.
            </p>

            <h2>3. Information Sharing</h2>
            <p>
              We do not share your personal information with third parties
              except as described in this Privacy Policy or as required by law.
              We may share your information with service providers who assist us
              in operating our website or conducting our business, but they are
              required to maintain the confidentiality of your information.
            </p>

            <h2>4. Cookies and Similar Technologies</h2>
            <p>
              We may use cookies and similar tracking technologies to enhance
              your experience on our website. Cookies are small files that are
              stored on your device when you visit a website. You can adjust
              your browser settings to disable cookies, but this may affect your
              ability to access certain features of our site.
            </p>

            <h2>5. Security</h2>
            <p>
              We take reasonable measures to protect your information from
              unauthorized access or disclosure. However, no data transmission
              over the internet or method of storage can be guaranteed 100%
              secure. We cannot ensure or warrant the security of any
              information you transmit to us.
            </p>

            <h2>6. Changes to this Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date. We
              encourage you to review this Privacy Policy periodically to stay
              informed about how we are protecting your information.
            </p>

            <h2>7. Your Choices</h2>
            <p>
              You have the right to access, correct, or delete your personal
              information. You can also opt-out of receiving promotional
              communications from us by following the unsubscribe instructions
              provided in our emails.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us via email at{" "}
              <a href="mailto:sharfrasaqsan@gmail.com">
                sharfrasaqsan@gmail.com
              </a>{" "}
              or visit our{" "}
              <Link to="/contact" className="privacy-cta-link">
                Contact Us
              </Link>{" "}
              page. We are committed to addressing your inquiries promptly and
              ensuring your privacy is protected.
            </p>
          </Col>
        </Row>
      </Container>

      <NewsLetterSignup />
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
