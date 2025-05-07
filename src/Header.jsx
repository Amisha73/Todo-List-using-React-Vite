import React from 'react';

const Header = () => {
  return (
    <header>
      <input 
        type="text" 
        placeholder="Add a new task" 
        className='inputfield'
        required
      />
      <button className='btn'>Add</button>
    </header>
  );
  
}
export default Header;
