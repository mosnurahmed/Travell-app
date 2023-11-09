import React, { useEffect } from "react";
import Card from "./Card";

import { useGetDestinationsQuery } from "../feature/destination/destinationApi";
import { useDispatch } from "react-redux";
import { addDestinations } from "../feature/destination/destinationSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { addEmail } from "../feature/user/userSlice";

function Destinations() {
  const { user, isAuthenticated, isLoading: authLoading } = useAuth0();
  const { data: destinations, isLoading, isError, error } = useGetDestinationsQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading && !isError && destinations?.length > 0) {
      dispatch(addDestinations(destinations));
    }
  }, [isLoading, isError, destinations, dispatch]);

  useEffect(() => {
    // if (!isLoading && !isError && destinations?.length > 0) {
    //   dispatch(addDestinations(destinations));
    // }

    if (!authLoading) {
      localStorage.setItem("user", JSON.stringify({ email: user.email }));
      dispatch(addEmail(user.email));
    }
  }, [authLoading, user]);

  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>{error.data}</div>;
  } else if (!isLoading && !isError && destinations?.length === 0) {
    content = <div>No Destination found!</div>;
  } else if (!isLoading && !isError && destinations?.length > 0) {
    content = destinations.slice(0, 3).map((destination) => {
      return <Card key={destination.id} destination={destination} />;
    });
  }

  return (
    <div className="my-16">
      <h1 className="text-4xl sm:text-6xl   font-bold text-[#083344] text-center py-20">Trending Destination</h1>
      <div className="flex flex-col lg:flex-row  gap-x-2">{content}</div>
    </div>
  );
}

export default Destinations;
