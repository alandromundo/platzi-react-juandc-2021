import React from "react";
import "../styles/components/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
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
