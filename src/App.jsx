import React from "react";
import Header from "./Header";
import ToDoList from "./ToDoList";
import "./App.css";

const App = () => {
  
  return (
    <>
    <h1>To-Do List</h1>
    <div className="app">
      <Header />
      <div className="taskstatus">
        <button className='btn'>All</button>
        <button className='btn'>Active</button>
        <button className='btn'>Completed</button>
      </div>
      <ToDoList />
    </div>
    </>
  );
};

export default App;
