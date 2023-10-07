import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./styles/GamesPage.css";
import Header from "../components/header";
import NewsletterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";
import games from "../components/GameData"; // Import game data

function Games() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />

      <header className="games-header">
        <h1 className="games-title">
          <strong>Games</strong>
        </h1>
      </header>

      <Container className="game-list mt-5 mb-5">
        <Row className="row-cols-2 row-cols-md-3 row-cols-lg-5">
          {games.map((game, index) => (
            <Col key={index}>
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
