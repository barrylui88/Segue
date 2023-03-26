import logo from './logo.svg';
import Date from "./components/date"
import Name from "./components/name"
import Timer from "./components/timer"

//import './App.css';

function App() {
  return (
    <div className="App">
      <div className="float-start date-module">
          <Date/>
    </div>
    
    <div className="box name-module">
      <Name/>    
    </div>

    <div className="box timer-module">
      <Timer/>
  
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
