import React from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoNav } from "../components/TodoNav";
import { Modal } from '../modals';
import { TodoForm } from '../components/TodoForm';
import { TodoLoadingItems } from '../components/TodoLoadingItems';
import { EmptyTodos } from '../components/EmptyTodos';
import { TodoErrorItems } from '../components/TodoErrorItems';
 
function AppUI() {

  const { error,
          loading,
          searchedTodos,
          toggleCompleteTodo,
          onDelete,
          openModal,
          setOpenModal
        } = React.useContext(TodoContext);

  return(
    <React.Fragment>
      <TodoNav />

      <TodoCounter />

      <TodoSearch />

      
      <TodoList>
        {/* Mostramos un mensaje en caso de que ocurra algún error */}
        {error && <TodoErrorItems />}
        {/* Mostramos un mensaje de cargando, cuando la aplicación está cargando lo sdatos */}
        {loading && <TodoLoadingItems />}
        {/* Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO */}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}

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

      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />

    </React.Fragment>
  );
}

export { AppUI }