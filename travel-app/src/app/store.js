import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../feature/api/apiSlice";
import DestinationReducer from "../feature/destination/destinationSlice"
import FilterReducer from "../feature/filter/filterSlice"
import UserReducer from "../feature/user/userSlice"

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
     destinations:DestinationReducer,
     filter: FilterReducer,
     user:UserReducer
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
});
