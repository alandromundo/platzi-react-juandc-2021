import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <App saludo="Hola">
    Contenido children
  </App>,
  document.getElementById('root')
);