// News.js
import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../components/header";
import NewsLetterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";
import ActionImage from "../components/images/action.jpg";
import AdventureImage from "../components/images/adventure.jpg";
import RacingnImage from "../components/images/racing.jpg";
import "../components/styles/LatestNews.css";
import { Link } from "react-router-dom";

function News() {
  const newsArticles = [
    {
      title: "New Game Release: Action Heroes Unleashed!",
      excerpt:
        "Get ready for the ultimate action experience. Action Heroes Unleashed is now available. Join the battle and defeat powerful foes to save the world from impending doom. Explore a vast open world, unlock powerful abilities, and customize your hero to become the ultimate action hero.",
      imageSrc: ActionImage,
      link: "./News1.js",
    },
    {
      title: "Upcoming Events: Join the Gaming Tournament",
      excerpt:
        "Compete with gamers worldwide in our upcoming gaming tournament. Don't miss out on the chance to prove your skills and win fantastic prizes. Prepare your strategies, assemble your team, and get ready for thrilling competition in various game titles. Will you emerge as the champion?",
      imageSrc: AdventureImage,
      link: "./News2.js",
    },
    {
      title: "Website Redesign: Explore Our Fresh Look",
      excerpt:
        "We've revamped our website for a better user experience. Check out our new design that's more user-friendly and visually appealing. Navigate through our game catalog, community forums, and news articles with ease. Discover our latest releases and updates in style.",
      imageSrc: RacingnImage,
      link: "/news/website-redesign",
    },
    {
      title: "Exciting New Features: Game Expansion Pack Now Available",
      excerpt:
        "Experience even more thrills with our latest game expansion pack. Dive into new levels, challenges, and storylines that will keep you engaged for hours. Unlock exclusive in-game rewards and become a master of the game. Get your expansion pack now!",
      imageSrc: ActionImage,
      link: "/news/game-expansion",
    },
    {
      title: "Community Spotlight: Meet Our Top Gamers",
      excerpt:
        "We're shining a spotlight on our top gamers from around the world. Learn about their gaming journey, strategies, and achievements. Get insights and tips from the pros to improve your gaming skills. Join our gaming community and be part of the elite!",
      imageSrc: AdventureImage,
      link: "/news/community-spotlight",
    },
    {
      title: "Exclusive Sneak Peek: Upcoming Game Teaser",
      excerpt:
        "Get an exclusive sneak peek into our highly anticipated upcoming game. Watch the teaser trailer that reveals a glimpse of the game's world, characters, and gameplay. Stay tuned for more updates and the official release date!",
      imageSrc: RacingnImage,
      link: "/news/upcoming-game-teaser",
    },
  ];

  return (
    <div>
      <Header />

      <Container className="latest-news news-page-margin">
        <h2 className="mb-3 text-center">
          <strong>Latest News & Updates</strong>
        </h2>
        {newsArticles.map((article, index) => (
          <Row key={index} className="mb-3">
            <Col lg={12}>
              <Card className="news-card">
                <Card.Body>
                  <Row>
                    <Col lg={3}>
                      <img
                        src={article.imageSrc}
                        alt={article.title}
                        className="news-image"
                      />
                    </Col>
                    <Col lg={9}>
                      <Card.Title className="news-title">
                        {article.title}
                      </Card.Title>
                      <Card.Text className="news-excerpt text-left">
                        {article.excerpt}
                      </Card.Text>
                      <Link
                        to={index === 1 ? "/News2" : "/News1"}
                        className="btn btn-secondary news-link"
                      >
                        Read More
                      </Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>

      <NewsLetterSignup />
      <Footer />
    </div>
  );
}

export default News;
