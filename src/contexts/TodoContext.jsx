import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {

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
  

  return(
    <TodoContext.Provider value={{
      loading,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      toggleCompleteTodo,
      onDelete,
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };