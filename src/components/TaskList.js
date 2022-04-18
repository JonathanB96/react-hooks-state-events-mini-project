import React from "react";
import Task from "./Task.js"


function TaskList({data}) {
  return (
    <div className="tasks">
      {data.map((obj)=>{
        return <Task obj={obj} key={data.indexOf(obj)} />

      })}
    </div>
  );
}

export default TaskList;
