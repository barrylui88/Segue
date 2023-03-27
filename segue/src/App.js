import logo from './logo.svg';
import Date from "./components/date"
import Name from "./components/name"
import Timer from "./components/timer"

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <div className="card-deck">
          <div className="card">
            <div className="card-body">
              <div className="date-module">
                <Date/>
              </div>
            </div>
          </div>
               
          <div className="card">
            <div className="card-body">
              <div className="name-module">
                <Name/>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="timer-module">
                <Timer/>
              </div>
            </div>
          </div>
        </div>
      </div>  

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
          Learn React
    </a>
  </header>
</div>
  );
}

export default App;
