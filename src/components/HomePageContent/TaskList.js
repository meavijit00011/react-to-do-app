import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteImg from "../../img/delete.png";
import classes from "./TaskList.module.css";
import { taskActions } from "../../store/taskSlice";
const TaskList = () => {
  const taskData = useSelector((state) => state.task);
  const [day, setDay] = useState("today");
  const dispatch = useDispatch();
  let TasksList = taskData.Tasks;
  const date = new Date();
  let classList = {
    class1: "",
    class2: "",
    class3: "",
  };
  if (day == "today") {
    classList.class1 = `${classes.active}`;
    TasksList = taskData.Tasks.filter((task) => {
      const time = new Date(task.time);
      if (time.getDate() == date.getDate()) {
        return task;
      }
    });
  } else if (day == "tomorrow") {
    classList.class2 = `${classes.active}`;
    TasksList = taskData.Tasks.filter((task) => {
      const time = new Date(task.time);
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      if (time.getDate() == tomorrow.getDate()) {
        return task;
      }
    });
  } else {
    classList.class3 = `${classes.active}`;
  }

  const taskDoneHandler = (id) => {
    dispatch(taskActions.updateTask(id));
  };
  const taskDelteHandler = (id) => {
    dispatch(taskActions.deleteTask(id));
  };
  let tasksNotDone = TasksList.length;
  const remainingTask = TasksList.filter((task) => task.status == false);
  tasksNotDone = remainingTask.length;
  const getDate = (time) => {
    const date = new Date(time);
    let arrayOfWeekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let arrayOfMonths = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let taskTime = `${arrayOfWeekDays[date.getDay()]} , ${date.getDate()} ${
      arrayOfMonths[date.getMonth()]
    }`;
    return taskTime;
  };
  const optionButtonHandler = (type) => {
    if (type == "today") {
      setDay("today");
    } else if (type == "tomorrow") {
      setDay("tomorrow");
    } else if (type == "All Tasks") {
      setDay("All Tasks");
    }
  };
  return (
    <div className={classes.task__list__container}>
      <div>
        <button
          onClick={optionButtonHandler.bind(false, "today")}
          className={classList.class1}
        >
          Today
        </button>
        <button
          onClick={optionButtonHandler.bind(false, "tomorrow")}
          className={classList.class2}
        >
          Tomorrow
        </button>
        <button
          onClick={optionButtonHandler.bind(false, "All Tasks")}
          className={classList.class3}
        >
          All Tasks
        </button>
      </div>
      <div>
        <span>Reamining Tasks:- {tasksNotDone}</span>
        <div className={classes.all__tasks}>
          {TasksList.map((task) => (
            <div className={classes.task} key={task.id}>
              <div className={classes.date}>
                <p>{getDate(task.time)}</p>
              </div>
              <div className={classes.task__description}>
                {(task.status && (
                  <input
                    type="checkbox"
                    className={classes.check__task}
                    onClick={taskDoneHandler.bind(false, task.id)}
                    checked
                  ></input>
                )) || (
                  <input
                    type="checkbox"
                    className={classes.check__task}
                    onClick={taskDoneHandler.bind(false, task.id)}
                  ></input>
                )}

                <p>{task.description}</p>
              </div>
              <img
                src={DeleteImg}
                className={classes.delete__img}
                onClick={taskDelteHandler.bind(false, task.id)}
              ></img>
            </div>
          ))}
          {TasksList.length == 0 && <p>No Tasks !</p>}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
