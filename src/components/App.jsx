import React, { useState } from "react";
import Todo from "./TodoIteam";
import InputArea from "./inputArea";

function App() {
  const [arrayItem, setAttayItem] = useState([]);

  function addItem(item) {
    setAttayItem((preValue) => {
      return [...preValue, item];
    });
  }

  function deleteItem(id) {
    setAttayItem((preValue) => {
      return preValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addItem={addItem} />
      <div>
        <ul>
          {arrayItem.map((item, index) => {
            return (
              <Todo
                key={index}
                id={index}
                text={item}
                checkedItem={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
