import React, { useState, useRef } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./styles/GameList.css";
import games from "./GameData"; // Import game data

function GameList() {
  const gamesPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const gamesHeadingRef = useRef(null);

  // Calculate the index range for games to display on the current page
  const startIndex = (currentPage - 1) * gamesPerPage;
  const endIndex = startIndex + gamesPerPage;
  const gamesToDisplay = games.slice(startIndex, endIndex);

  const totalPages = Math.ceil(games.length / gamesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setTimeout(() => {
        window.scrollTo({
          top: gamesHeadingRef.current.offsetTop,
          behavior: "smooth",
        }); // Scroll to the "Games" heading
      }, 0);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setTimeout(() => {
        window.scrollTo({
          top: gamesHeadingRef.current.offsetTop,
          behavior: "smooth",
        }); // Scroll to the "Games" heading
      }, 0);
    }
  };

  return (
    <div>
      <header className="game-header" ref={gamesHeadingRef}>
        <h1 className="game-title">
          <strong>Games</strong>
        </h1>
      </header>

      <Container className="game-list mt-5 mb-5">
        <Row>
          {gamesToDisplay.map((game, index) => (
            <Col key={index} lg={3} md={4} sm={6} xs={6}>
              <Card className="game-card">
                <Card.Img variant="top" src={game.imageSrc} alt={game.title} />
                <Card.Body>
                  <Card.Title>{game.title}</Card.Title>
                  <Card.Text>{game.Category}</Card.Text>
                  <Button variant="success" href={`/game/${game.id}`}>
                    Play Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="pagination">
          <Button onClick={handlePrevPage} disabled={currentPage === 1}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          <span className="page-number">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default GameList;
