import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { auth } from "../../firebase";
import { userActions } from "../../redux/ConfigureStore.User";

import Nav from "../../components/Nav/Nav";

import classes from "./ProfilePage.module.css";

const ProfilePage = () => {
  const user = useSelector((state) => state.userReducer.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signout = () => {
    auth.signOut();
    dispatch(userActions.clearState());
    navigate("/");
  };

  return (
    <div className={classes.container}>
      <Nav />
      <div className={classes.body}>
        <h1>Edit Profile</h1>
        <div className={classes.info}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="" />
          <div className={classes.details}>
            <h2>{user}</h2>
            <div className={classes.plans}>
              <h3>Plans</h3>
              <p>Renewal Date: </p>
              <div className={classes.plan}></div>
              <button onClick={signout} className={classes.signout}>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
