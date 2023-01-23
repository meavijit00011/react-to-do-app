import "./App.css";
import WelcomePage from "./components/WelcomePage";
import HomePage from "./pages/HomePage";
import { Route, Switch } from "react-router-dom";
import HelpPage from "./pages/HelpPage";
import AboutPage from "./pages/AboutPage";
import SettingPage from "./pages/SettingPage";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskActions } from "./store/taskSlice";
import { userActions } from "./store/userSlice";
import { Redirect } from "react-router-dom";
let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const taskData = useSelector((state) => state.task.Tasks);
  const userData = useSelector((state) => state.user);
  const [user, setUserExist] = useState(null);
  useEffect(() => {
    if (isInitial === false) {
      localStorage.setItem("tasks", JSON.stringify(taskData));
      localStorage.setItem("user", JSON.stringify(userData));
      setUserExist(true);
    }
  }, [taskData, userData]);
  useEffect(() => {
    if (isInitial) {
      let taskArray = JSON.parse(localStorage.getItem("tasks"));
      let user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        dispatch(
          userActions.changeUser({
            userName: user.userName,
            userAvatar: user.userAvatar,
          })
        );
      }
      if (taskArray) {
        taskArray.forEach((element) => {
          dispatch(
            taskActions.createTask({
              description: element.description,
              time: element.time,
              status: element.status,
            })
          );
        });
      }
      isInitial = false;
    }
  }, []);
  return (
    <>
      <Switch>
        <Route path="/" exact>
          {!user && <WelcomePage />}
          {user && <Redirect to="/home"></Redirect>}
        </Route>

        <Route path="/home" exact>
          {user && <HomePage></HomePage>}
          {!user && <Redirect to="/"></Redirect>}
        </Route>

        <Route path="/help">
          {user && <HelpPage></HelpPage>}
          {!user && <Redirect to="/"></Redirect>}
        </Route>

        <Route path="/about">
          {user && <AboutPage></AboutPage>}
          {!user && <Redirect to="/"></Redirect>}
        </Route>

        <Route path="/setting">
          {user && <SettingPage></SettingPage>}
          {!user && <Redirect to="/"></Redirect>}
        </Route>
      </Switch>
    </>
  );
}

export default App;
