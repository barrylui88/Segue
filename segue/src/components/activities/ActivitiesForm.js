import React, { useState, useEffect }  from "react";

const saved = [];

const ActivitiesForm = () => {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const savedItem = [inputValue];
    // saved.push(inputValue);

    // localStorage.setItem("formInput", [saved]);
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
    <form onSubmit={handleFormSubmit}>
      <div className="row">
          <div className="col">
            <input type="text" value={inputValue} placeholder='Singing...' onChange={handleInputChange} />
          </div>
      </div>
      {/* To get localStorage item */}
      {/* <div>{saved[0]}</div> */}
      <div className="row">
          <div className="col">
            <button type="submit" className="btn btn-primary save-button">Save</button>
          </div>
      </div>
    </form>

  );
}

export default ActivitiesForm;