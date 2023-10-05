import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import actionImage from "./images/action.jpg"; // Import the image
import adventureImage from "./images/adventure.jpg"; // Import the image
import puzzleImage from "./images/puzzle.jpg"; // Import the image
import strategyImage from "./images/strategy.jpg"; // Import the image
import racingImage from "./images/racing.jpg"; // Import the image
import sportsImage from "./images/sports.jpg"; // Import the image
import "./styles/PopularCategories.css";

function PopularCategories() {
  // Define an array of popular categories with their names, links, text, and images
  const categories = [
    {
      name: "Action",
      link: "/games/action",
      text: "Thrilling battles and intense gameplay.",
      imageSrc: actionImage, // Use the imported image
    },
    {
      name: "Adventure",
      link: "/games/adventure",
      text: "Epic journeys and mysterious lands.",
      imageSrc: adventureImage, // Use the imported image
    },
    {
      name: "Puzzle",
      link: "/games/puzzle",
      text: "Mind-bending challenges and brain teasers.",
      imageSrc: puzzleImage, // Use the imported image
    },
    {
      name: "Strategy",
      link: "/games/strategy",
      text: "Cunning tactics and resource management.",
      imageSrc: strategyImage, // Use the imported image
    },
    {
      name: "Racing",
      link: "/games/racing",
      text: "High-speed races and thrilling competitions.",
      imageSrc: racingImage, // Use the imported image
    },
    {
      name: "Sports",
      link: "/games/sports",
      text: "Virtual sports experiences and competitions.",
      imageSrc: sportsImage, // Use the imported image
    },
  ];

  return (
    <Container className="popular-categories" style={{ marginTop: "5rem" }}>
      <h2 className="mb-3">
        <strong>Popular Game Categories</strong>
      </h2>
      <Row>
        {categories.map((category, index) => (
          <Col key={index} lg={4} md={6} sm={12}>
            <Card className="mb-3 category-card popular-game">
              {/* Use the imported image */}
              <Card.Img
                variant="top"
                src={category.imageSrc}
                alt={category.name}
              />
              <Card.Body>
                <Card.Title className="category-title">
                  {category.name}
                </Card.Title>
                <Card.Text className="category-text">{category.text}</Card.Text>
                <a
                  href={category.link}
                  className="btn btn-primary category-link"
                >
                  Explore Games
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PopularCategories;
