import React from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Header from "../components/header";

function SearchResult() {
  const { query } = useParams();

  // Replace this with your actual data
  const games = [
    {
      id: 1,
      title: "Game 1",
      Category: "Action",
      imageSrc: "image_url_for_game_1", // Replace with the actual image URL
    },
    {
      id: 2,
      title: "Game 2",
      Category: "Adventure",
      imageSrc: "image_url_for_game_2", // Replace with the actual image URL
    },
    // Add more games as needed
  ];

  // Filter games based on the search query for title or category
  const filteredResults = games.filter(
    (result) =>
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.Category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div style={{ marginTop: "5rem" }}>
        <Container>
          <h2 className="mb-4">
            Search Results for <strong>"{query}"</strong>
          </h2>
          {filteredResults.length === 0 ? (
            <p>No results found for "{query}".</p>
          ) : (
            <Row>
              {filteredResults.map((result) => (
                <Col key={result.id} md={3} className="mb-4">
                  <Card
                    style={{
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      transition:
                        "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={result.imageSrc} // Use the actual image URL
                      alt={result.title}
                    />
                    <Card.Body>
                      <Card.Title>{result.title}</Card.Title>
                      <Card.Text>{result.Category}</Card.Text>
                      <Button variant="success" href={`/play/${result.id}`}>
                        Play
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </div>
    </div>
  );
}

export default SearchResult;
