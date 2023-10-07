import React, { useEffect } from "react";
import "./styles/AboutUsPage.css";
import Header from "../components/header";
import NewsletterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";
import Logo from "../logo.png";
import Member1 from "./images/Member1.jpg";
import Member2 from "./images/Member2.jpg";
import Member3 from "./images/Member3.jpg";

function AboutUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <div className="container about-us" style={{ marginTop: "5rem" }}>
        <h2 className="text-center mb-4">
          <strong>About Us</strong>
        </h2>

        <div className="row">
          <div className="col-lg-6">
            <img src={Logo} alt="Quick Fun Play" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <p className="about-us-text">
              Welcome to <strong>Quick Fun Play</strong>, your premier
              destination for quick and delightful online gaming experiences.
              Our enthusiastic team is wholly devoted to curating a vast
              selection of simple yet captivating games, all accessible directly
              from your web browser.
            </p>
          </div>
          <div className="col-lg-12">
            <p className="about-us-text">
              At <strong>Quick Fun Play</strong>, our mission is unequivocal: to
              infuse joy and exhilaration into your daily life through our
              diverse assortment of games. Whether you're a casual gamer looking
              for a momentary escape or a competitive player in pursuit of a
              thrilling challenge, we've tailored our offerings to cater to
              every gaming inclination. We're passionate about innovation and
              are unwavering in our commitment to{" "}
              <strong>expanding our game library</strong>. This ensures there's
              always something novel and entertaining to explore in our digital
              playground. We take immense pride in prioritizing user
              satisfaction, consistently delivering top-tier gaming experiences
              that beckon you to return time and again.
              <br />
              <br />
              Our talented team comprises gaming aficionados and skilled
              developers, all bound by a shared dedication to crafting games
              that are not only easy to pick up but also provide{" "}
              <strong>boundless entertainment</strong>. We firmly believe in the{" "}
              <strong>unifying power of games</strong>, the ability to connect
              people across borders, and the capacity to infuse joy into every
              day.
              <br />
              <br />
              As you embark on your gaming journey with{" "}
              <strong>Quick Fun Play</strong>, we extend our heartfelt gratitude
              for choosing us as your preferred source for quick and
              entertaining online games. We cordially invite you to peruse our
              extensive collection, immerse yourself in the world of gaming, and{" "}
              <strong>commence your quest for endless fun</strong>. Your
              adventure begins <strong>here</strong>, and we're thrilled to be
              part of it.
            </p>
          </div>
        </div>

        <hr></hr>

        <div className="row">
          <div className="col-md-6">
            <h3 className="about-us-heading">
              <strong>Why Choose Us</strong>
            </h3>
            <p className="about-us-text">
              When you choose Quick Fun Play, you're choosing a partner
              dedicated to your success. Here are a few reasons to partner with
              us:
            </p>
            <ul className="about-us-list">
              <li>
                <strong>Expert Team:</strong> Our team is highly skilled and
                experienced.
              </li>
              <li>
                <strong>Quality Assurance:</strong> We ensure top-notch quality
                in all our offerings.
              </li>
              <li>
                <strong>Customer Support:</strong> We provide excellent customer
                support.
              </li>
              <li>
                <strong>Innovation:</strong> We stay ahead with the latest
                industry trends.
              </li>
              <li>
                <strong>Proven Track Record:</strong> We have a history of
                delivering results.
              </li>
            </ul>
          </div>

          <div className="col-md-6">
            <h3 className="about-us-heading">
              <strong>Our Values</strong>
            </h3>
            <p className="about-us-text">
              When you select Quick Fun Play, you're opting for a collaborator
              committed to your triumph. Here are several compelling reasons to
              align with us:
            </p>
            <ul className="about-us-list">
              <li>
                <strong>Customer-Centric:</strong> We prioritize our customers'
                needs and satisfaction.
              </li>
              <li>
                <strong>Innovation:</strong> We constantly seek new and better
                solutions.
              </li>
              <li>
                <strong>Quality:</strong> We maintain high standards in our
                products and services.
              </li>
              <li>
                <strong>Collaboration:</strong> Teamwork is at the heart of our
                success.
              </li>
              <li>
                <strong>Adaptability:</strong> We embrace change and adapt to
                industry trends.
              </li>
              <li>
                <strong>Passion:</strong> Our love for gaming drives us to
                deliver exceptional experiences.
              </li>
              <li>
                <strong>Community:</strong> We believe in fostering a vibrant
                gaming community.
              </li>
            </ul>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-12">
            <h3 className="about-us-heading">
              <strong>Meet Our Team</strong>
            </h3>
            <div className="row">
              {/* Team Member Card 1 */}
              <div className="col-md-4 mb-4 d-flex">
                <div className="card text-center">
                  <img
                    src={Member1}
                    className="card-img-top"
                    alt="Team Member 1 - John Doe"
                  />
                  <div className="card-body">
                    <h5 className="card-title">John Doe</h5>
                    <p className="card-text">Lead Game Developer</p>
                    <p className="card-text">
                      John Doe is our visionary Lead Game Developer, bringing to
                      life imaginative and engaging gaming experiences. With
                      years of experience in the gaming industry, John's
                      creativity and technical expertise drive our game
                      development to new heights.
                    </p>
                  </div>
                </div>
              </div>

              {/* Team Member Card 2 */}
              <div className="col-md-4 mb-4 d-flex">
                <div className="card text-center">
                  <img
                    src={Member2}
                    className="card-img-top"
                    alt="Team Member 2 - Jane Smith"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Jane Smith</h5>
                    <p className="card-text">UX/UI Designer</p>
                    <p className="card-text">
                      Jane Smith is our talented UX/UI Designer, responsible for
                      crafting intuitive and visually stunning user interfaces.
                      With a keen eye for design, Jane ensures that our games
                      are not only fun to play but also a joy to navigate.
                    </p>
                  </div>
                </div>
              </div>

              {/* Team Member Card 3 */}
              <div className="col-md-4 mb-4 d-flex">
                <div className="card text-center">
                  <img
                    src={Member3}
                    className="card-img-top"
                    alt="Team Member 3 - Mike Johnson"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Mike Johnson</h5>
                    <p className="card-text">Marketing Manager</p>
                    <p className="card-text">
                      Mike Johnson is our Marketing Manager, leading the charge
                      in promoting our games and connecting with our gaming
                      community. With a passion for gaming and marketing
                      expertise, Mike ensures our games reach a global audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewsletterSignup />
      <Footer />
    </div>
  );
}

export default AboutUsPage;
