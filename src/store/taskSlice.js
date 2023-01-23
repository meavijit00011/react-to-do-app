import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  Tasks:[]
};
const taskSlice = createSlice({
  name: "TaskLists",
  initialState,
  reducers: {
    createTask(state, action) {
      state.Tasks.push({
        id: (Math.random() * 100).toFixed(2),
        description: action.payload.description,
        time: action.payload.time,
        status: action.payload.status || false,
      });
    },
    updateTask(state, action) {
      const taskId = action.payload;
      const task = state.Tasks.find((task) => task.id == taskId);
      task.status = task.status ? false : true;
    },
    deleteTask(state, action) {
      const taskId = action.payload;
      state.Tasks=state.Tasks.filter(task=>task.id!=taskId)
    },
  },
});
export const taskActions = taskSlice.actions;
export default taskSlice.reducer;
