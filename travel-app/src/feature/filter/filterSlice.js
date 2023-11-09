import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: undefined,

  id:undefined
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    makeSearch: (state, action) => {
      state.search = action.payload;
    },
    selectValue:(state,action) =>{
      state.search=action.payload.searchValue,
      state.id=action.payload.id


    }
  },
});

export default filterSlice.reducer;
export const { makeSearch,selectValue } = filterSlice.actions;
