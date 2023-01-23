import React, { useRef, useState } from "react";
import classes from "./WelcomePageUserInput.module.css";
import Images from "../../img/ImageExport";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice.js";
const WelcomePageUserInput = (props) => {
  const [terms, setTerms] = useState(false);
  const [avatar, setAvatar] = useState(Images.avatar0);
  const history = useHistory();
  const dispatch = useDispatch();
  const userNameInputRef = useRef();
  const termsAndConditionHandler = () => {
    setTerms(!terms);
  };
  const goBackHandler = () => {
    props.showNextPage(false);
  };
  const imgClickHandler = (key) => {
    setAvatar(Images[key]);
  };
  const enterButtonHandler = () => {
    dispatch(
      userActions.changeUser({
        userName: userNameInputRef.current.value,
        userAvatar: avatar,
      })
    );
    history.replace("/home");
  };
  return (
    <div className={classes.container}>
      <div>
        <img src={avatar} className={classes.avatar__img}></img>
      </div>
      <div className={classes.image__container}>
        {Object.keys(Images).map((key) => {
          return (
            <img
              src={Images[key]}
              onClick={imgClickHandler.bind(false, key)}
            ></img>
          );
        })}
      </div>
      <span>Select Avatar</span>
      <input
        placeholder="Enter Your User Name"
        className={classes.userName}
        ref={userNameInputRef}
      ></input>
      <div className={classes.terms__condition}>
        <input
          type="checkbox"
          value="checked"
          onClick={termsAndConditionHandler}
        ></input>
        Accept Terms & Condition
      </div>
      <div className={classes.option__button}>
        <button onClick={goBackHandler} className={classes.back__button}>
          Back
        </button>
        {terms ? (
          <button
            className={classes.enter__button}
            onClick={enterButtonHandler}
          >
            Finish And Enter
          </button>
        ) : (
          <button disabled>Finish And Enter</button>
        )}
      </div>
    </div>
  );
};

export default WelcomePageUserInput;
