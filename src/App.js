// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import AboutUsPage from "./Pages/AboutUsPage";
import GamesPage from "./Pages/GamesPage";
import SearchResult from "./Pages/SearchResult";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/search/:query" element={<SearchResult />} />
          {/* Add more routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
