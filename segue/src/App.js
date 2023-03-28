import Date from "./components/date"
import Name from "./components/name"
import MainSectionStart from "./components/main-section-start";
import MainSectionWip from "./components/main-section-wip";
import DateModule from "./components/date";
import './App.css';

function App() {
  return (
    <div className="App">
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