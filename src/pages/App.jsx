// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "../hooks/useLocalStorage";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Freir cebolla", completed: false },
//   { text: "Sazonar cebolla", completed: false },
//   { text: "Servir cebolla", completed: false },
// ];



// Cuando empieza por una mayúscula significa que es un Componente
function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading
  } = useLocalStorage('TODOS_V1', []);

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

    saveTodos(newTodos);
  };

  const onDelete = (text) => {
    const todoWithoutTextTodo = todos.filter((todo) => todo.text !== text);
    saveTodos(todoWithoutTextTodo);
  };

  // console.log("Antes del useEffect");
  // React.useEffect(() => {
  //   console.log("use effect");
  // });
  // console.log("Después del useEffect");
  
  return (
    <AppUI
      loading={loading}
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
