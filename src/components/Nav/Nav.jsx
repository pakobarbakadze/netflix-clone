import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import classes from "./Nav.module.css";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <div className={`${classes.container} ${showNav && classes["container_black"]}`}>
      <div className={classes.contents}>
        <Link to="/">
          <img className={classes.logo} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
        </Link>
        <Link to="/profile">
          <img className={classes.avatar} src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
