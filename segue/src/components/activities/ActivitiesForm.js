import React, { useState }  from "react";
import './ActivitiesForm.css'

// Checking if formInput exists
// so the page doesn't reset the data everytime users reload the page
var saved = JSON.parse(window.localStorage.getItem("formInput"))

if (saved === null || saved.length === 0)
{
  saved = [];
  localStorage.setItem("formInput", JSON.stringify(saved));
}

// Main programme
const ActivitiesForm = () => {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const savedItem = [inputValue];
    appendSaved(savedItem);
    setInputValue("");
  };

  function appendSaved(savedItem) {
    if(saved.length >= 4){
      saved.shift();
    }
    
    saved.push(savedItem);
    localStorage.setItem("formInput", JSON.stringify(saved));
  }


  return (
    <div className="d-flex activity-container justify-content-center">
      <div className="d-flex flex-column">
        <div className="d-flex flex-row align-items-center form-container">
          <form onSubmit={handleFormSubmit}>
              <input type="text" value={inputValue} placeholder='  Singing...' onChange={handleInputChange} />
          </form>
          <button type="submit" className="btn btn-primary add-button" onClick={handleFormSubmit}>+</button>
        </div>
        

        <div className="buttons-container justify-content-center">
          {saved.map((item, index) => (
              <div key={index}>
                <button className="btn btn-secondary custom-button" onClick={() => console.log('Button is clicked!')}>{item[0]}</button>
              </div>
          ))}
        </div>      
      </div>
    </div>
    

  );
}

export default ActivitiesForm;
