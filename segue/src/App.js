import Date from "./components/date"
import Name from "./components/name"

import Timer from "./components/timer"


import MainSectionStart from "./components/main-section-start";
import MainSectionWip from "./components/main-section-wip";
import DateModule from "./components/date";
import './App.css';

function App() {
  return (
    <div className="App">

      
              <div className="date-module">
                <Date/>
              </div>
        
              <div className="name-module">
                <Name/>
              </div>
        
              <div className="timer-module">
                <Timer/>
              </div>
  
</div>

      <header>
        <div className="float-start">
          <DateModule className="date-component"/>
        </div>
        <div className="name">
          <Name/>    
        </div>
      </header>
      <body>
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