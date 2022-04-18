import React from "react";

function NewTaskForm({data, onTaskFormSubmit}) {
  const newData = data.filter((el)=>{
    return el.category !=="All"
  })
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" id="text"/>
      </label>
      <label>
        Category
        <select name="category" id="category">
          {newData.map((item)=>{
            return <option key={newData.indexOf(item)}>{item.category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
