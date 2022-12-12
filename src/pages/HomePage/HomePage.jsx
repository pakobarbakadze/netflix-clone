import React from "react";

import classes from "./HomePage.module.css";

import Nav from "../../components/Nav/Nav";

const HomePage = () => {
  return (
    <div className={classes.container}>
      <Nav />
    </div>
  );
};

export default HomePage;
