import logo from './logo.svg';
import './App.css';

// Cuando empieza por una mayúscula significa que es un Componente
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.children} y un saludo: {props.saludo}
        </a>
      </header>
    </div>
  );
}

export default App;
