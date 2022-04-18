import React from "react";


function CategoryFilter({list, handleClick}) {
   
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {list.map((item)=>{
        return <button key={item} onClick={handleClick} id={item}>{item}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
