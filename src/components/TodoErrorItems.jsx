import React from 'react';
import '../styles/components/TodoErrorItems.css'

function TodoErrorItems() {
  return(
    <div className='TodoErrorItems'>
      <img src="https://cdn-icons-png.flaticon.com/512/4319/4319124.png" alt="error loading todos" />
      <h2>¡Oh, no!...</h2>
      <p>Algo salió mal al cargar tus todos. Intenta recargar la página. Si el error persiste entra en pánico.</p>
    </div>
  );
}

export { TodoErrorItems }