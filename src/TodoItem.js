import React, { useState } from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const [isChecked, setIsChecked] = useState(props.completed);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li className="TodoItem">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleOnChange}
        className="TodoItem__checkbox"
        name=""
        id=""
      />
      <p
        className={`TodoItem__description ${
          props.completed && "TodoItem__description--completed"
        }`}
      >
        {props.text}
      </p>
      <i className="fa fa-trash TodoItem__delete-btn" aria-hidden="true"></i>
    </li>
  );
}

export { TodoItem };
