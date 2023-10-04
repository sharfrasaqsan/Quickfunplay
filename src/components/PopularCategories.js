import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/PopularCategories.css";

function PopularCategories() {
  // Define an array of popular categories with their names and links
  const categories = [
    { name: "Action", link: "/games/action" },
    { name: "Adventure", link: "/games/adventure" },
    { name: "Puzzle", link: "/games/puzzle" },
    { name: "Strategy", link: "/games/strategy" },
    // Add more categories as needed
  ];

  return (
    <Container className="mt-5">
      <h2>Popular Game Categories</h2>
      <Row>
        {categories.map((category, index) => (
          <Col key={index} lg={4} md={6} sm={12}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
                <a href={category.link} className="btn btn-primary">
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
