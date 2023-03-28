import Name from "./components/name"
import Timer from "./components/timer"
import MainSectionStart from "./components/main-section-start";
import MainSectionWip from "./components/main-section-wip";
import DateModule from "./components/date";
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <header className="text-center name-module">
          <Name/>
        </header>

        <div>
          <div className="float-start date-module">
            <DateModule/>
          </div>

          <div className="float-end timer-module">
            <Timer/>
          </div>
        </div>  
      </nav> 
        
      <div className="start-body">
        <MainSectionStart/>
      </div>

      <div className="wip-body">
        <MainSectionWip/>
      </div>
    </div>

  );
}

export default App;