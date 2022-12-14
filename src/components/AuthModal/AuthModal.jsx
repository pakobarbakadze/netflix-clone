import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { userActions } from "../../redux/ConfigureStore.User";

import classes from "./AuthModal.module.css";

const AuthModal = (props) => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState(props.mode);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signup = (event) => {
    event.preventDefault();
    dispatch(userActions.setState(emailRef.current.value));
  };

  const login = (event) => {
    event.preventDefault();
    dispatch(userActions.setState(emailRef.current.value));
  };

  return (
    <div className={classes.container}>
      <form>
        {mode === "signup" && <h1>Sign Up</h1>}
        {mode === "login" && <h1>Sign In</h1>}
        <input ref={emailRef} type="email" placeholder="Email Address" defaultValue={props.email} />
        <input ref={passwordRef} type="password" placeholder="Password" />
        {mode === "signup" && (
          <button onClick={signup} type="submit">
            Sign Up
          </button>
        )}
        {mode === "login" && (
          <button onClick={login} type="submit">
            Sign In
          </button>
        )}
        {mode === "login" && (
          <h4>
            <span className={classes.grey}>New to Netflix?</span>{" "}
            <span className={classes.link} onClick={() => setMode("signup")}>
              Sign up now.
            </span>
          </h4>
        )}
        {mode === "signup" && (
          <h4>
            <span className={classes.grey}>Already on Netflix?</span>{" "}
            <span className={classes.link} onClick={() => setMode("login")}>
              Sign in now.
            </span>
          </h4>
        )}
      </form>
    </div>
  );
};

export default AuthModal;
