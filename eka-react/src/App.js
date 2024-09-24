import logo from './logo.svg';
import './App.css';
import EkaComponent from './EkaComponent';
import ClassComponent from './ClassComponent'
import Counter from './Counter';

function App() {
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
          Learn to code, lmao
        </a>
        <Counter />
        <EkaComponent />
        <ClassComponent />
      </header>
    </div>
  );
}

export default App;
