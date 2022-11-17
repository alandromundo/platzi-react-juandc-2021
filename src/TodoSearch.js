import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
  return (
    <div className="TodoSearch">
      <input placeholder="Cebolla" />
      <i className="fa fa-search" aria-hidden="true"></i>
    </div>
  );
}

export { TodoSearch };
