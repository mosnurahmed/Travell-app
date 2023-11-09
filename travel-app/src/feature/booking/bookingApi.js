import { apiSlice } from "../api/apiSlice";


export const bookingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (data) => {
        console.log("api")
        return({
          url:"/booking",
          method:"POST",
          body:data
  
        })
      }
   
    }),
  
  }),
});

export const { useAddBookMutation } = bookingApi;
