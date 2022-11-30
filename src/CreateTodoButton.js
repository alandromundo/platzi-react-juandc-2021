import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const onClickButton = (msg) => {
    alert(msg);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClickButton("Aquí debería aparecer el modal")}
    >
      <i className="fa fa-plus CreateTodoButton__icon" aria-hidden="true"></i>
    </button>
  );
}

export { CreateTodoButton };
