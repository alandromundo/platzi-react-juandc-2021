// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { AppUI } from "./AppUI";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Freir cebolla", completed: false },
  { text: "Sazonar cebolla", completed: false },
  { text: "Servir cebolla", completed: false },
];

// Cuando empieza por una mayúscula significa que es un Componente
function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    setTodos(newTodos);
  };

  const onDelete = (text) => {
    const todoWithoutTextTodo = todos.filter((todo) => todo.text !== text);
    setTodos(todoWithoutTextTodo);
  };

  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleCompleteTodo={toggleCompleteTodo}
      onDelete={onDelete}
    />
  );
}

export default App;
