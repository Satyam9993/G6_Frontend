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
    setUserName: (state, action) => {
      state.username = action.payload.username; 
    },
    setDeleteUser: (state, action) => {
      state.userId = "";
      state.email = "";
      state.username = "Tom"
      state.token = ""
    }
  },
});

export const { setToken,setUserInfo, setDeleteUser } = userSlice.actions;
export default userSlice.reducer;