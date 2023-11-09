import  { useEffect, useState } from "react";
import SearchLists from "./SearchLists";
import { useDispatch, useSelector } from "react-redux";
import { makeSearch } from "../feature/filter/filterSlice";
import { Link } from "react-router-dom";


function Search() {
  const dispatch = useDispatch();


  const { search,id } = useSelector((state) => state.filter);
  const [searching, setSearching] = useState(search);
  const[pId,setPId] =useState("")

  useEffect(() => {
    if (search) {
      setSearching(search);
      setPId(id)
    }
  }, [search,id]);

  const searchHandle = (value) => {
    dispatch(makeSearch(value));
  };

  return (
    <div className="h-auto">
      <form>
        <div
          className="flex items-center gap-x-4   mx-3 py-2 px-4"
          style={{
            boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <input
            className="border border-[1px] w-full text-gray-700  py-3 rounded px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Location"
            aria-label="Search"
            value={searching}
            onChange={(e) => searchHandle(e.target.value)}
          />

          <div className=" flex flex-colum border border-1 rounded hover:bg-[#083344] transition ese-in items-center px-2 py-2 bg-[#44D7B6] text-white border outline-black gap-x-2 ">
            <svg
              className=" m-0 p-0 w-4"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="15"
              viewBox="0 0 50 50"
            >
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
          <Link to={`/destinationDetails/${pId}`}>
      
          <button type="submit">Search</button>
          
          </Link>
          </div>
        </div>
      </form>
      <SearchLists />
    </div>
  );
}

export default Search;
// to={`/destinationDetail/${}`}