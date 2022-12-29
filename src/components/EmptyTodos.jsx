import React from 'react';
import '../styles/components/EmptyTodos.css'

function EmptyTodos() {
  return(
    <div className='EmptyTodos'>
      <img src="https://cdn-icons-png.flaticon.com/512/5618/5618543.png" alt="sticky notes" />
      <h2>¡Vaya!...</h2>
      <p>No tienes ningún todo aún. Empieza agregando un nuevo <b>todo</b> utilizando el botón azul.</p>
    </div>
  );
}

export { EmptyTodos }