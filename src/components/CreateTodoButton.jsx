import React from "react";
import "../styles/components/CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      <i className="fa fa-plus CreateTodoButton__icon" aria-hidden="true"></i>
    </button>
  );
}

export { CreateTodoButton };
