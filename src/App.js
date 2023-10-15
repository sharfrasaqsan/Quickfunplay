// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import AboutUsPage from "./Pages/AboutUsPage";
import GamesPage from "./Pages/GamesPage";
import ContactUsPage from "./Pages/ContactUsPage";
import SearchResult from "./Pages/SearchResult";
import NewsPage from "./Pages/NewsPage";
import TermsOfService from "./Pages/TermsOfService";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import FAQ from "./Pages/FAQ";
import "./App.css";
import News1 from "./Pages/NewsPages/News1";
import News2 from "./Pages/NewsPages/News2";
import TicTacToe from "./Pages/Games/TicTacToe/TicTacToe";

function App() {
  function ScrollToTop() {
    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page when the route changes
    }, []);

    return null; // This component doesn't render anything
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/news1" element={<News1 />} />
          <Route path="/news2" element={<News2 />} />
          <Route path="/game/1" element={<TicTacToe />} />
          {/* Add more routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
