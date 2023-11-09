
import { useDispatch } from "react-redux";
import { selectValue } from "../feature/filter/filterSlice";

function SearchList({ destination }) {
  const dispatch = useDispatch();
  const selectHandler = (value) => {
    dispatch(selectValue(value));
  };

  return (
    <>
      <li onClick={() => selectHandler({searchValue:destination.title,id:destination.id})}>{destination.title}</li>
    </>
  );
}

export default SearchList;
