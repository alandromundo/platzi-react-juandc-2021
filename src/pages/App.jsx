// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../contexts/TodoContext";

// Cuando empieza por una mayúscula significa que es un Componente
function App() {
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
