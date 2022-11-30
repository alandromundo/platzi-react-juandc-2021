import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="TodoSearch">
      <input placeholder="Cebolla" onChange={onSearchValueChange} />
      <i className="fa fa-search" aria-hidden="true"></i>
    </div>
  );
}

export { TodoSearch };
