import React from "react";
import { TodoContext } from "../contexts/TodoContext";
import "../styles/components/TodoCounter.css";

function TodoCounter() {

  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <div  className="TodoCounter" >
      <h1>
        ¡Saludos!
      </h1>
      <h2>
        Has completado {completedTodos} de {totalTodos} TODOs
      </h2>
    </div>
  );
}

export { TodoCounter };
