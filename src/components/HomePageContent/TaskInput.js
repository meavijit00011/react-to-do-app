import { useEffect, useState } from "react";
import calender from "../../img/calender.png";
import classes from "./TaskInput.module.css";
import "react-calendar/dist/Calendar.css";
import { taskActions } from "../../store/taskSlice";
import { useDispatch } from "react-redux";
import { Calendar } from "react-calendar";
let isInitial = true;
const TaskInput = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const taskAddHandler = () => {
    setTask("");
    if (task.length > 1) {
      dispatch(
        taskActions.createTask({
          description: task,
          time: date.toISOString(),
        })
      );
    }
  };
  const dateChange=(date)=>{
    setDate(date);
    setShowCalendar(!showCalendar)
  }
  const taskInputHandler = (e) => {
    setTask(e.target.value);
  };
  const showCalendarHandler = () => {
    setShowCalendar(!showCalendar);
  };
  return (
    <div className={classes.task__input__container}>
      <input
        placeholder="Tyep To Add Task"
        onChange={taskInputHandler}
        value={task}
      ></input>
      <div className={classes.calender__img}>
        <img src={calender} onClick={showCalendarHandler}></img>
        <button onClick={taskAddHandler}>Add</button>
      </div>
      <div className={classes.calendar__container}>
        {showCalendar && (
          <Calendar
            onChange={dateChange}
            minDate={new Date()}
            maxDate={new Date(2026, 6, 1)}
          ></Calendar>
        )}
      </div>
    </div>
  );
};

export default TaskInput;
