import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import arrow icons
import "./styles/GameList.css"; // Include your CSS file for styling
import ActionImage from "./images/action.jpg";

function GameList() {
  const gamesPerPage = 12; // Number of games to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const games = [
    {
      id: 1,
      title: "Game 1",
      Category: "Category: Action",
      imageSrc: ActionImage,
    },
    {
      id: 1,
      title: "Game 1",
      Category: "Category: Action",
      imageSrc: ActionImage,
    },
    {
      id: 1,
      title: "Game 1",
      Category: "Category: Action",
      imageSrc: ActionImage,
    },
    {
      id: 1,
      title: "Game 1",
      Category: "Category: Action",
      imageSrc: ActionImage,
    },
    {
      id: 1,
      title: "Game 1",
      Category: "Category: Action",
      imageSrc: ActionImage,
    },
    {
      id: 1,
      title: "Game 1",
      Category: "Category: Action",
      imageSrc: ActionImage,
    },
    {
      id: 1,
      title: "Game 1",
      Category: "Category: Action",
      imageSrc: ActionImage,
    },
    {
      id: 1,
      title: "Game 1",
      Category: "Category: Action",
      imageSrc: ActionImage,
    },
    {
      id: 1,
      title: "Game 1",
      Category: "Category: Action",
      imageSrc: ActionImage,
    },
    {
      id: 1,
      title: "Game 1",
      Category: "Category: Action",
      imageSrc: ActionImage,
    },
    {
      id: 1,
      title: "Game 1",
      Category: "Category: Action",
      imageSrc: ActionImage,
    },
    {
      id: 1,
      title: "Game 1",
      Category: "Category: Action",
      imageSrc: ActionImage,
    },
    {
      id: 1,
      title: "Game 1",
      Category: "Category: Action",
      imageSrc: ActionImage,
    },
    {
      id: 1,
      title: "Game 1",
      Category: "Category: Action",
      imageSrc: ActionImage,
    },
    {
      id: 1,
      title: "Game 1",
      Category: "Category: Action",
      imageSrc: ActionImage,
    },
    {
      id: 1,
      title: "Game 1",
      Category: "Category: Action",
      imageSrc: ActionImage,
    },
    {
      id: 1,
      title: "Game 1",
      Category: "Category: Action",
      imageSrc: ActionImage,
    },
    {
      id: 1,
      title: "Game 1",
      Category: "Category: Action",
      imageSrc: ActionImage,
    },
    {
      id: 1,
      title: "Game 1",
      Category: "Category: Action",
      imageSrc: ActionImage,
    },
    // Add more game objects as needed
  ];

  // Calculate the index range for games to display on the current page
  const startIndex = (currentPage - 1) * gamesPerPage;
  const endIndex = startIndex + gamesPerPage;
  const gamesToDisplay = games.slice(startIndex, endIndex);

  const totalPages = Math.ceil(games.length / gamesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Container className="game-list mt-5 mb-5">
      <h2 className="mb-3">
        <strong>Games</strong>
      </h2>
      <Row>
        {gamesToDisplay.map((game, index) => (
          <Col key={index} lg={2} md={4} sm={6} xs={12}>
            <Card className="game-card">
              <Card.Img variant="top" src={game.imageSrc} alt={game.title} />
              <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <Card.Text>{game.Category}</Card.Text>
                <Button variant="success" href={`/game/${game.id}`}>
                  Play Now
                </Button>
                {/* <Button variant="dark" href={`/game/${game.id}`}>
                  Read More
                </Button> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="pagination">
        <Button onClick={handlePrevPage} disabled={currentPage === 1}>
          <FontAwesomeIcon icon={faArrowLeft} /> {/* Left arrow icon */}
        </Button>
        <span className="page-number">
          Page {currentPage} of {totalPages}
        </span>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
          <FontAwesomeIcon icon={faArrowRight} /> {/* Right arrow icon */}
        </Button>
      </div>
    </Container>
  );
}

export default GameList;
