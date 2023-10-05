import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ActionImage from "./images/action.jpg";
import AdventureImage from "./images/adventure.jpg";
import RacingnImage from "./images/racing.jpg";
import "../styles/LatestNews.css";

function LatestNews() {
  // Define an array of recent news articles with titles, excerpts, images, and links
  const newsArticles = [
    {
      title: "New Game Release: Action Heroes Unleashed!",
      excerpt:
        "Get ready for the ultimate action experience. Action Heroes Unleashed is now available. Join the battle and defeat powerful foes to save the world from impending doom. Explore a vast open world, unlock powerful abilities, and customize your hero to become the ultimate action hero.",
      imageSrc: ActionImage, // Replace with the actual image URL
      link: "/news/action-heroes-unleashed",
    },
    {
      title: "Upcoming Events: Join the Gaming Tournament",
      excerpt:
        "Compete with gamers worldwide in our upcoming gaming tournament. Don't miss out on the chance to prove your skills and win fantastic prizes. Prepare your strategies, assemble your team, and get ready for thrilling competition in various game titles. Will you emerge as the champion?",
      imageSrc: AdventureImage, // Replace with the actual image URL
      link: "/news/gaming-tournament",
    },
    {
      title: "Website Redesign: Explore Our Fresh Look",
      excerpt:
        "We've revamped our website for a better user experience. Check out our new design that's more user-friendly and visually appealing. Navigate through our game catalog, community forums, and news articles with ease. Discover our latest releases and updates in style.",
      imageSrc: RacingnImage, // Replace with the actual image URL
      link: "/news/website-redesign",
    },
    // Add more news articles as needed
  ];

  return (
    <Container className="latest-news">
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
                    <a
                      href={article.link}
                      className="btn btn-secondary news-link"
                    >
                      Read More
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default LatestNews;
