import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "../components/Header/Header";

const SettingPage = () => {
  const clearUserHandler = ()=>{
    localStorage.clear();
    window.location.reload()
  }
  return (
    <div>
      <Header></Header>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ textAlign: "center" }}>This Is Setting Page....</h2>
        <button onClick={clearUserHandler}
          style={{
            padding: "10px",
            cursor: "pointer",
            backgroundColor: "red",
            outline: "none",
            border: "none",
            color: "#fff",
          }}
        >
          Clear User{" "}
        </button>
      </div>
    </div>
  );
};

export default SettingPage;
