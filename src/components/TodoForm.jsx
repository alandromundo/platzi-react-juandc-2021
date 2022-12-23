import React from 'react';
import { TodoContext } from "../contexts/TodoContext";
import '../styles/components/TodoForm.css'

function TodoForm() {

  const { setOpenModal, addTodo } = React.useContext(TodoContext);
  const [textAreaValue, setTextAreaValue] = React.useState('');

  const onCancel = () => {
    // Close the modal and don't save the new todo-item
    setOpenModal(false);
  };

  const onSubmit = (e) => {
    // Close the modal and add a new todo-item
    e.preventDefault();
    addTodo(textAreaValue);
    setOpenModal(false);
  }

  const onChangeNewTodoText = (e) => {
    setTextAreaValue(e.target.value);
  }

  return(
    <form onSubmit={onSubmit} className="TodoForm">
      <label>Crea una nueva tarea</label>
      <textarea name="" id="" cols="30" rows="10" value={textAreaValue} placeholder='Cortar cebolla' onChange={onChangeNewTodoText}></textarea>
      <div>
        <button type='button' onClick={onCancel}>Cancelar</button>
        <button type='submit'>Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };