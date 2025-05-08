// github link :  https://github.com/Amisha73/Todo-List-using-React-Vite

import React, { useState } from "react";
import Header from "./Header"; //import header file
import ToDoList from "./ToDoList"; //import todolist file
import "./App.css";

const App = () => {
  // states for input, todo and filter
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  // addTodo funtion add the task by clicking on add button
  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const capitalizedText =
        inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
  
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: capitalizedText,
          completed: false,
        },
      ]);
      setInputValue("");
    } else {
      alert("Please enter a task");
    }
  };

  // deleteTodo function delete the task by clicking on delete button
  const deleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  // completeTodo function mark the task as complete the task by clicking on the task
  // after click it show task as del tag works
  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // editTodo function you can edit the function by clicking on edit button and then save the modified task
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      })
    );
  };
  // filterTodo function filter the task by clicking on all, active and completed
  const filterTodos = () =>
    todos.filter((todo) => {
      if (filter === "all") {
        return todo;
      }
      if (filter === "completed") {
        return todo.completed;
      }
      if (filter === "active") {
        return !todo.completed;
      }
    });

  return (
    <>
      <h1>To-Do List</h1>
      <div className="app">
        <Header
          inputValue={inputValue}
          setInputValue={setInputValue}
          addTodo={addTodo}
        />
        <div className="taskstatus">
          <button className="btn" onClick={() => setFilter("all")}>
            All
          </button>
          <button className="btn" onClick={() => setFilter("active")}>
            Active
          </button>
          <button className="btn" onClick={() => setFilter("completed")}>
            Completed
          </button>
        </div>
        <ToDoList
          todos={filterTodos()}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          editTodo={editTodo}
        />
      </div>
    </>
  );
};

export default App;
