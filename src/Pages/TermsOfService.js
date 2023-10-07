import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Header from "../components/header";
import NewsLetterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";
import "./styles/TermsOfServices.css"; // Import custom CSS file

function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />

      <header className="terms-header">
        <Container>
          <h1 className="terms-title">
            <strong>Terms of Service</strong>
          </h1>
          <p className="terms-lead">
            Please read these terms and conditions carefully before using our
            website.
          </p>
        </Container>
      </header>

      <Container className="terms-content">
        <Row>
          <Col>
            <h2>1. Acceptance of Terms</h2>
            <p>
              Welcome to our website. By accessing or using this website, you
              agree to comply with and be bound by these Terms of Service. If
              you do not agree to these terms, please do not use the website.
            </p>

            <h2>2. Use of the Website</h2>
            <p>
              You agree to use the website for lawful purposes and in a way that
              does not infringe on the rights of others or restrict or inhibit
              their use and enjoyment of the website.
            </p>

            <h2>3. User Registration</h2>
            <p>
              Some areas of this website may require user registration. You
              agree to provide accurate and complete information during the
              registration process and to update this information to keep it
              current.
            </p>

            <h2>4. Privacy Policy</h2>
            <p>
              Your use of this website is also governed by our Privacy Policy.
              Please review our Privacy Policy to understand our practices
              regarding the collection and use of your personal information.
            </p>

            <h2>5. User Conduct</h2>
            <p>
              While using this website, you agree not to engage in any of the
              following activities:
            </p>
            <ul>
              <li>
                Posting, transmitting, or otherwise disseminating any content
                that is unlawful, harmful, threatening, abusive, harassing,
                defamatory, vulgar, obscene, or invasive of another's privacy.
              </li>
              <li>
                Engaging in any conduct that restricts or inhibits anyone's use
                or enjoyment of the website, or which may harm us or other users
                or expose them to liability.
              </li>
              <li>
                Using the website for any purpose that is unlawful or prohibited
                by these terms.
              </li>
            </ul>

            <h2>6. Intellectual Property</h2>
            <p>
              The content on this website, including text, graphics, logos,
              images, and software, is the property of the website owner and is
              protected by copyright and other applicable laws.
            </p>

            <h2>7. Modifications to Terms</h2>
            <p>
              We reserve the right to revise these Terms of Service at any time
              without prior notice. By continuing to use this website after
              changes have been made, you agree to be bound by the revised
              terms.
            </p>

            <h2>8. Disclaimer</h2>
            <p>
              This website is provided "as is" without warranties of any kind,
              either express or implied. We do not warrant that the website will
              be error-free or uninterrupted. Your use of the website is at your
              sole risk.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, we shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits or revenues, whether
              incurred directly or indirectly, or any loss of data, use,
              goodwill, or other intangible losses resulting from:
            </p>
            <ul>
              <li>Your use or inability to use the website.</li>
              <li>Any unauthorized access to or use of our servers.</li>
              <li>
                Any interruption, suspension, or termination of the website.
              </li>
              <li>
                Any viruses or malicious code transmitted to or through the
                website.
              </li>
            </ul>

            <h2>10. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance
              with the laws of [Your Jurisdiction].
            </p>
          </Col>
        </Row>
      </Container>

      <hr className="container"></hr>

      <section className="terms-cta">
        <Container>
          <Row>
            <Col md={8}>
              <h2>Have Questions or Concerns?</h2>
              <p>
                We value transparency and want to ensure that you fully
                understand our Terms of Service. If you have any questions,
                concerns, or need further clarification regarding these terms,
                please don't hesitate to reach out to us. Our dedicated support
                team is here to assist you.
              </p>
              <p>
                You can contact us via email at{" "}
                <a href="mailto:sharfrasaqsan@gmail.com">
                  sharfrasaqsan@gmail.com
                </a>{" "}
                or use the contact form on our{" "}
                <Link to="/contact" className="terms-cta-link">
                  Contact Us
                </Link>{" "}
                page. We'll make every effort to respond promptly and provide
                you with the information you need.
              </p>
              <p>
                Your satisfaction and understanding of our Terms of Service are
                important to us, and we're committed to ensuring a positive
                experience while using our website.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <NewsLetterSignup />
      <Footer />
    </div>
  );
}

export default TermsOfService;
