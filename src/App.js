import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";

import BrowsePage from "./pages/BrowsePage/BrowsePage";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

const App = () => {
  const user = useSelector((state) => state.userReducer.user);

  return (
    <div className="app">
      {!user ? (
        <HomePage />
      ) : (
        <Routes>
          <Route path="/" element={<BrowsePage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
