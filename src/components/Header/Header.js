import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import user from "../../img/avatar0.png";
import { useSelector } from "react-redux";
const Header = () => {
  const userData = useSelector((state) => state.user);
  const [showNavLinks, setShowNavLinks] = useState(false);
  const hamburgerClickHandler = () => {
    setShowNavLinks(!showNavLinks);
  };
  let classList = showNavLinks
    ? `${classes.nav__links} ${classes.mobile__view__navlinks}`
    : classes.nav__links;
  let userAvatar = userData.userAvatar=='avatar0' ? user:userData.userAvatar
  return (
    <div className={classes.container}>
      <h2 className={classes.app__heading}>To Do App</h2>
      <div className={classes.userAvatar}>
        <img src={userAvatar}></img>
        <p>Hi, {userData.userName}</p>
      </div>
      <div className={classList}>
        <div>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="setting">Setting</NavLink>
        </div>
      </div>
      <div className={classes.hamburger} onClick={hamburgerClickHandler}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
