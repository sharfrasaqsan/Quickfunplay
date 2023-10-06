import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./styles/GamesPage.css";
import ActionImage from "../components/images/action.jpg";
import Header from "../components/header";
import NewsletterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";

function Games() {
  const games = [
    {
      id: 1,
      title: "Game 1",
      Category: "Category: Action",
      imageSrc: ActionImage,
    },
  ];

  return (
    <div className="gamepagetop">
      <Header />

      <Container className="game-list mt-5 mb-5">
        <h2 className="mb-3">
          <strong>Games</strong>
        </h2>
        <Row>
          {games.map((game, index) => (
            <Col key={index} lg={2} md={4} sm={6} xs={6}>
              <Card className="game-card">
                <Card.Img variant="top" src={game.imageSrc} alt={game.title} />
                <Card.Body>
                  <Card.Title>{game.title}</Card.Title>
                  <Card.Text>{game.Category}</Card.Text>
                  <Button variant="success" href={`/game/${game.id}`}>
                    Play
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <NewsletterSignup />
      <Footer />
    </div>
  );
}

export default Games;
