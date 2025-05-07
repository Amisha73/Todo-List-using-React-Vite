import React from "react";

const ToDoItem = () => {
  return (
    <li>
      <div>
        <input type="text" className="inputfield" />
        <button className="btn">Save</button>
      </div>
      {/* after adding task this show */}
      {/* <div className='list'>
          <span className='listItem'>{todo.text}</span>
          <div className=' edel'>
          <button className='btn'>Edit</button>
          <button className='btn'>Delete</button>
          </div>
        </div> */}
    </li>
  );
};

export default ToDoItem;
