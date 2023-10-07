import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Header from "../components/header";
import NewsLetterSignUp from "../components/NewsletterSignup";
import Footer from "../components/Footer";
import games from "../components/GameData";

function SearchResult() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { query } = useParams();

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

      <NewsLetterSignUp />
      <Footer />
    </div>
  );
}

export default SearchResult;
