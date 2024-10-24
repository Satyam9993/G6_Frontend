import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username : "Just A Sample"
};
const userSlice = createSlice({
    name : "userSlcie",
    initialState: initialState,
    reducers: {
      myAction: (state, action) => {
        // reducer logic
      },
    },
});

export const { myAction } = userSlice.actions;
export default userSlice.reducer;