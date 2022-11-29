import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  return (
    <button className="CreateTodoButton">
      <i className="fa fa-plus CreateTodoButton__icon" aria-hidden="true"></i>
    </button>
  );
}

export { CreateTodoButton };
