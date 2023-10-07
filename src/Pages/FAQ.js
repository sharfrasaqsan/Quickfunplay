import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Header from "../components/header";
import NewsLetterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";
import "./styles/FAQ.css"; // Import custom CSS file

function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <div>
      <Header />

      <header className="faq-header">
        <Container>
          <h1 className="faq-title">
            <strong>Frequently Asked Questions</strong>
          </h1>
          <p className="faq-lead">
            Find answers to common questions about our website and services.
          </p>
        </Container>
      </header>

      <Container className="faq-content">
        <Row>
          <Col className="faq-margin">
            <div
              className={`faq-item ${openItems.includes(1) ? "open" : ""}`}
              onClick={() => toggleItem(1)}
            >
              <div className="faq-question">
                {" "}
                1. How do I create an account?
              </div>
              <div className="faq-answer">
                To create an account, click on the "Sign Up" button in the
                top-right corner of the website. Follow the prompts to enter
                your information and complete the registration process.
              </div>
            </div>

            <div
              className={`faq-item ${openItems.includes(2) ? "open" : ""}`}
              onClick={() => toggleItem(2)}
            >
              <div className="faq-question">2. Is my information secure?</div>
              <div className="faq-answer">
                Yes, we take the security of your information seriously. We use
                industry-standard encryption and security measures to protect
                your data. You can learn more about our security practices in
                our <Link to="/privacy">Privacy Policy</Link>.
              </div>
            </div>

            <div
              className={`faq-item ${openItems.includes(3) ? "open" : ""}`}
              onClick={() => toggleItem(3)}
            >
              <div className="faq-question">
                3. How can I reset my password?
              </div>
              <div className="faq-answer">
                To reset your password, go to the login page and click on the
                "Forgot Password" link. Follow the instructions sent to your
                email to reset your password.
              </div>
            </div>

            <div
              className={`faq-item ${openItems.includes(4) ? "open" : ""}`}
              onClick={() => toggleItem(4)}
            >
              <div className="faq-question">
                4. What should I do if I encounter an issue with the website?
              </div>
              <div className="faq-answer">
                If you experience any issues or have technical difficulties with
                the website, please{" "}
                <Link to="/contact">contact our support team</Link>. We will
                assist you in resolving the problem.
              </div>
            </div>

            <div
              className={`faq-item ${openItems.includes(5) ? "open" : ""}`}
              onClick={() => toggleItem(5)}
            >
              <div className="faq-question">
                5. Can I change my account information?
              </div>
              <div className="faq-answer">
                Yes, you can update your account information by logging in and
                visiting your account settings. There, you can edit your profile
                details and preferences.
              </div>
            </div>

            <div
              className={`faq-item ${openItems.includes(6) ? "open" : ""}`}
              onClick={() => toggleItem(6)}
            >
              <div className="faq-question">
                6. How do I unsubscribe from promotional emails?
              </div>
              <div className="faq-answer">
                To unsubscribe from promotional emails, click on the
                "Unsubscribe" link at the bottom of any promotional email you
                receive from us.
              </div>
            </div>

            <div
              className={`faq-item ${openItems.includes(7) ? "open" : ""}`}
              onClick={() => toggleItem(7)}
            >
              <div className="faq-question">
                7. Do you offer customer support on weekends?
              </div>
              <div className="faq-answer">
                Yes, our customer support team is available on weekends. You can
                reach out to us for assistance, and we will respond as soon as
                possible.
              </div>
            </div>

            <div
              className={`faq-item ${openItems.includes(8) ? "open" : ""}`}
              onClick={() => toggleItem(8)}
            >
              <div className="faq-question">
                8. What payment methods do you accept?
              </div>
              <div className="faq-answer">
                We accept various payment methods, including credit/debit cards
                and online payment platforms. You can view the accepted payment
                methods during the checkout process.
              </div>
            </div>

            <div
              className={`faq-item ${openItems.includes(9) ? "open" : ""}`}
              onClick={() => toggleItem(9)}
            >
              <div className="faq-question">
                9. Can I change my email address?
              </div>
              <div className="faq-answer">
                Yes, you can change your email address by logging into your
                account and updating your email in the account settings. Make
                sure to verify the new email address for security purposes.
              </div>
            </div>

            <div
              className={`faq-item ${openItems.includes(10) ? "open" : ""}`}
              onClick={() => toggleItem(10)}
            >
              <div className="faq-question">
                10. How long does it take to process orders?
              </div>
              <div className="faq-answer">
                Order processing times may vary depending on the items ordered
                and our current order volume. You can check the estimated
                delivery time during the checkout process.
              </div>
            </div>

            <div
              className={`faq-item ${openItems.includes(11) ? "open" : ""}`}
              onClick={() => toggleItem(11)}
            >
              <div className="faq-question">
                11. How can I contact your support team?
              </div>
              <div className="faq-answer">
                If you have any other questions or need further assistance,
                please don't hesitate to{" "}
                <Link to="/contact">contact our support team</Link>. We are here
                to help and will respond as soon as possible.
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <NewsLetterSignup />
      <Footer />
    </div>
  );
}

export default FAQ;
