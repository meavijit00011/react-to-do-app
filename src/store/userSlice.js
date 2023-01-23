import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userName: "user",
  userAvatar: "avatar0",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUser(state, action) {
      let name = action.payload.userName.trim();
      state.userName = name.length>1 ? name:'user'
      state.userAvatar = action.payload.userAvatar;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
