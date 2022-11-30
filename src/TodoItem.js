import React, { useState } from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const [isChecked, setIsChecked] = useState(props.completed);

  const handleOnChange = () => {
    alert("Marcaste como hecho el to-do " + props.text);
    setIsChecked(!isChecked);
  };

  // const onComplete = () => {
  //   alert("Ya completaste el to-do " + props.text);
  // };

  const onDelete = () => {
    alert("Borraste el to-do " + props.text);
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
      <i
        className="fa fa-trash TodoItem__delete-btn"
        onClick={onDelete}
        aria-hidden="true"
      ></i>
    </li>
  );
}

export { TodoItem };
