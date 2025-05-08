import React, { useState } from "react";

const ToDoItem = ({ todo, deleteTodo, editTodo, completeTodo }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  // function to handle the edit text
  const handleEdit = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {isEditing ? (
        <div>
          <input
            type="text"
            className="inputfield"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button className="btn" onClick={handleEdit}>
            Save
          </button>
        </div>
      ) : (
        <div className="list">
          <span className="listItem" onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </span>
          <div className=" edel">
            <button className="btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="btn" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default ToDoItem;
