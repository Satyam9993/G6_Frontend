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
    setUserInfo: (state, action) => {
      console.log("email", action.payload.email);
      
      state.userId = action.payload.userId;
      state.email = action.payload.email;
      state.username = action.payload.username; 
    },
  },
});

export const { setToken,setUserInfo } = userSlice.actions;
export default userSlice.reducer;