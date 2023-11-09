import { createSlice } from "@reduxjs/toolkit";

const initialState={
  destinations:undefined,
  destination:undefined
}

const destinationSlice = createSlice({
  name:"destination",
  initialState,
  reducers:{
    addDestinations:(state,action) =>{
        state.destinations=action.payload
    },
    addDestination:(state,action)=>{
      state.destinations=action.payload
    }
    

  }
  




});

export default destinationSlice.reducer
export const { addDestinations,addDestination} =destinationSlice.actions
