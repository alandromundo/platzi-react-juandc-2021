// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoNav } from "./TodoNav";

const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Freir cebolla", completed: false },
  { text: "Sazonar cebolla", completed: false },
];

// Cuando empieza por una mayúscula significa que es un Componente
function App(props) {
  return (
    <React.Fragment>
      <TodoNav />

      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
