import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [arrayItem, setAttayItem] = useState([]);
  function handleChange(event) {
    setItem(event.target.value);
  }

  function handleClick() {
    setAttayItem((preValue) => {
      return [...preValue, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={item} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {arrayItem.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
