import React from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoNav } from "../components/TodoNav";
import { Modal } from '../modals';

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
        {error && <p>Desespérate, hubo un error...</p>}
        {/* Mostramos un mensaje de cargando, cuando la aplicación está cargando lo sdatos */}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {/* Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO */}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

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
          <p>TELETRANSPORTACION</p>
        </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />

    </React.Fragment>
  );
}

export { AppUI }