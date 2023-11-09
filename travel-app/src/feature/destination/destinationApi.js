import { apiSlice } from "../api/apiSlice";
import { addDestination, addDestinations } from "./destinationSlice";

export const destinationAPi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDestinations: builder.query({
      query: () => "/destination",
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const res = await queryFulfilled;
        dispatch(addDestinations(res.data));
      },
    }),
    getDestination: builder.query({
      query: (id) => `/destination/${id}`,
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const res = await queryFulfilled;
        dispatch(addDestination(res.data));
      },
    }),
  }),
});

export const { useGetDestinationsQuery,useGetDestinationQuery } = destinationAPi;
