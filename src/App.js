// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import AboutUsPage from "./Pages/AboutUsPage";
import GamesPage from "./Pages/GamesPage";
import ContactUsPage from "./Pages/ContactUsPage";
import SearchResult from "./Pages/SearchResult";
import NewsPage from "./Pages/NewsPage";
import "./App.css";
import News1 from "./Pages/NewsPages/News1";
import News2 from "./Pages/NewsPages/News2";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/news1" element={<News1 />} />
          <Route path="/news2" element={<News2 />} />
          {/* Add more routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
