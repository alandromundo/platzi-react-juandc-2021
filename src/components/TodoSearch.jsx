import React from "react";
import { TodoContext } from "../contexts/TodoContext";
import "../styles/components/TodoSearch.css";

function TodoSearch() {

  const { searchValue, setSearchValue } = React.useContext(TodoContext)

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="TodoSearch">
      <input
        placeholder="Cebolla"
        onChange={onSearchValueChange}
        value={searchValue}
      />
      <i className="fa fa-search" aria-hidden="true"></i>
    </div>
  );
}

export { TodoSearch };
