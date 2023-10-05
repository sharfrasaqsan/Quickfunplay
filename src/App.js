// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import AboutUsPage from "./Pages/AboutUsPage"; // New About Us page

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          {/* Add more routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
