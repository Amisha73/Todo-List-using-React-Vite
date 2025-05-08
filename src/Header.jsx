import React from "react";

const Header = ({ inputValue, setInputValue, addTodo }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
      // console.log(inputValue);
    }
  };
  return (
    <header>
      <input
        type="text"
        placeholder="Add a new task"
        className="inputfield"
        required
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="btn" onClick={addTodo}>
        Add
      </button>
    </header>
  );
};
export default Header;
