import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, deleteTodo, completeTodo, editTodo }) => {
  return (
    <div className="task-container">
      <ol>
        {Array.isArray(todos) &&
          todos.map((todo) => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
              editTodo={editTodo}
            />
          ))}
      </ol>
    </div>
  );
};

export default ToDoList;
