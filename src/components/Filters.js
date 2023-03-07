import React from "react";

function Filters({ onChangeType, onFindPetsClick, filters }) {


function handleChange(e) {
  onChangeType(e.target.value);
}

function handleClick() {
  onFindPetsClick();
  
}

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select value={filters}
        name="type" 
        id="type" 
        aria-label="type"
        onChange={handleChange}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button 
        className="ui secondary button"
        onClick={handleClick}>Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
