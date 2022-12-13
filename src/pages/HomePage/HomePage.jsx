import React from "react";

import classes from "./HomePage.module.css";

import Nav from "../../components/Nav/Nav";
import Banner from "../../components/Banner/Banner";

const HomePage = () => {
  return (
    <div className={classes.container}>
      <Nav />
      <Banner/>
    </div>
  );
};

export default HomePage;
