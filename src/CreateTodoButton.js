import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <button className='CreateTodoButton'>
      <i class="fa fa-plus" aria-hidden="true"></i>
    </button>
  )
}

export { CreateTodoButton };