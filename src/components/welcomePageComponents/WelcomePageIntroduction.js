import React from "react";
import img from "../../img/welcome-page.png";
import classes from './WelcomePageIntroduction.module.css'
const WelcomePageIntroduction = (props) => {
  const onClickHandler = ()=>{
    props.showNextPage(true)
  }
  return (
    <div className={classes.container}>
      <img src={img}></img>
      <h2>Great Things Done With To Do</h2>
      <p className={classes.describe}>
        Imporve Your Work Ethics
        <br></br>
        <br></br>
        Build Strong Mindset Towards Success
        <br></br>
        <br></br>
        Stop Procrastination
      </p>
      <button onClick={onClickHandler}>Get Started</button>
    </div>
  );
};

export default WelcomePageIntroduction;
