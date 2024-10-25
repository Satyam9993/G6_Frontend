import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: "Hi, Tom!",
  userId: "",
  email: "",
  token: "",
};
const userSlice = createSlice({
  name: "userSlcie",
  initialState: initialState,
  reducers: {
    setToken: (state, action) => {
      state.userId = action.payload.userId;
      state.token = action.payload.token;
    },
  },
});

export const { setToken } = userSlice.actions;
export default userSlice.reducer;