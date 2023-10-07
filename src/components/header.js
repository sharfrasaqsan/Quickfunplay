import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Logo from "../logo.png";
import { useNavigate } from "react-router-dom";
import "./styles/Header.css";

function Header() {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Redirect to the SearchResult component with the search query
    navigate(`/search/${searchQuery}`);
  };

  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/" className="logo">
          <img
            src={Logo}
            alt="Quick Fun Play Logo"
            className="d-inline-block align-top"
          />
          <span className="brand-name"></span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="/games" className="nav-link">
              Games
            </Nav.Link>
            <Nav.Link href="/about" className="nav-link">
              About
            </Nav.Link>
            <Nav.Link href="/news" className="nav-link">
              News
            </Nav.Link>
            <Nav.Link href="/contact" className="nav-link">
              Contact
            </Nav.Link>
            <form
              className="form-inline my-2 my-lg-0 form-flex"
              onSubmit={handleSearch}
            >
              <input
                className="form-control mr-sm-2 form-text"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                required
              />
              <button
                className="btn btn-outline-light my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
