import React from "react";
import Header from "../components/Header/Header";
import Home from '../components/HomePageContent/Home'
import TaskList from "../components/HomePageContent/TaskList";

const HomePage = () => {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <TaskList></TaskList>
    </>
  );
};

export default HomePage;
