

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email:undefined
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addEmail: (state, action) => {
      state.email = action.payload;
    },
  
  },
});

export default userSlice.reducer;
export const { addEmail } = userSlice.actions;
