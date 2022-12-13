import React, { useState } from "react";
import AuthModal from "../../components/AuthModal/AuthModal";

import classes from "./HomePage.module.css";

const HomePage = () => {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [email, setEmail] = useState("");

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.background}>
        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix" />
        <button className={classes["signIn_button"]} onClick={() => setLogin(true)}>
          Sign In
        </button>
        <div className={classes.gradient}></div>
      </div>
      <div className={classes.body}>
        {!login && !signup && (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className={classes.input}>
              <form onSubmit={() => setSignup(true)}>
                <input onChange={emailChangeHandler} type="email" placeholder="Email address" />
                <button type="submit" className={classes["input_button"]}>
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
        {!login && signup && <AuthModal mode="signup" email={email} />}
        {login && !signup && <AuthModal mode="login" email={email} />}
      </div>
    </div>
  );
};

export default HomePage;
