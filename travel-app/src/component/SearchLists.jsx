import React, { useEffect, useState } from "react";
import SearchList from "./SearchList";
import { useSelector } from "react-redux";

function SearchLists() {
  const { destinations } = useSelector((state) => state.destinations);
  const [renderDestination, setRenderDestination] = useState([]);
  const { search } = useSelector((state) => state.filter);

  const searchFilter = (destination) => {
    if (search === "") {
      // console.log(destination.title, "check");
      return false;
    }

    // console.log(search !== undefined);
    if (search !== undefined) {
      console.log(destination.title.includes(search) || destination.title.toLowerCase());

      return destination.title.includes(search) || destination.title.toLowerCase().includes(search);
    }
  };

  useEffect(() => {
    if (destinations !== undefined) {
      setRenderDestination(destinations);
    }
  }, [destinations]);

  return (
    <div className=" mx-3  leading-9">
      <ul
        className=" list-none pl-4"
        style={{
          boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        {renderDestination.filter(searchFilter).map((s) => (
          <SearchList destination={s} key={s.id} />
        ))}
      </ul>
    </div>
  );
}

export default SearchLists;
