import React from "react";
import "../styles/components/TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <h2 className="TodoCounter">
      Has completado {completed} de {total} TODOs
    </h2>
  );
}

export { TodoCounter };