import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const[arr, setArr] = useState(TASKS)
  function handleClick(e){
    let buttonText = e.target.textContent  
    let allButtons = document.querySelectorAll(".categories button")
    for(let el of allButtons){
      if(el.id ===buttonText ){
        el.className = "selected"
      }
      else {el.className = ""}
      
    }
  
    const newArr = TASKS.filter((el)=>{
      return el.category === buttonText
    })
    if(buttonText === "All"){
      setArr(TASKS)
    }
    else{setArr(newArr)}
    
          
    }
    const newObj = {
      text : '',
      category : ''
    }

    function handleSubmit(e){
      e.preventDefault()
      newObj.text =e.target.text.value       
      newObj.category = e.target.category.value
      const newArr = TASKS.push(newObj)
      setArr([...TASKS, newArr])
      }
    
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter list ={CATEGORIES} handleClick ={handleClick} />
      <NewTaskForm data = {arr} onTaskFormSubmit={handleSubmit}/>
      <TaskList data ={arr} />
    </div>
  );
}

export default App;
