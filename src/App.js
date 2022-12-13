import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import BrowsePage from "./pages/BrowsePage/BrowsePage";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  const user = "null";

  return (
    <div className="app">
      {!user ? (
        <HomePage />
      ) : (
        <Routes>
          <Route path="/" element={<BrowsePage />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
