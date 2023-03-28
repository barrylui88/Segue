import Date from "./components/date"
import Name from "./components/name"
import Timer from "./components/timer"
import MainSectionStart from "./components/main-section-start"
import MainSectionWip from "./components/main-section-wip"


import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <div className="float-start date-module">
                <Date/>
              </div><br/>
        
              <div className="name-module">
                <Name/>
              </div><br/>
        
              <div className="float-end timer-module">
                <Timer/>
              </div><br/>
        </header>
       
      
      
        <div className="start-body">
          <MainSectionStart/>
        </div>
        <div className="wip-body">
          <MainSectionWip/>
        </div>
      </body>
    </div>

  );
}

export default App;