import Name from "./components/name"
import Timer from "./components/timer"
import MainSectionWip from "./components/main-section-wip";
import DateModule from "./components/date";
import Activities from './components/activities/index';
import './App.css';
import './components/timer.css';
import './components/name.css';
import './components/date.css';

function App() {
  return (
    <div className="App">
      <div className="row top-bar">
        <div className="float-start baseline col date-module">
          <DateModule/>
        </div>
        <div className="text-center col name-module">
          <Name/>
        </div>
        <div className="float-end col timer-module">
          <Timer/>
        </div>
      </div> 

      <div className="row start-body">
        <Activities/>
      </div>

      <div className="wip-body">
        <MainSectionWip/>
      </div>
    </div>

  );
}

export default App;
