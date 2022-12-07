import React from 'react';
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoNav } from "../components/TodoNav";

function AppUI({totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  toggleCompleteTodo,
  onDelete}) {
  return(
    <React.Fragment>
      <TodoNav />

      <TodoCounter total={totalTodos} completed={completedTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => onDelete(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI }