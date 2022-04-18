import React from "react";

function Task({obj}) {
  
  function handleClick(e){
    e.target.parentNode.remove()
  }
  return (
    <div className="task">
      <div className="label">{obj.category}</div>
      <div className="text">{obj.text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
