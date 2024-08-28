// TodoInput.js
import React, { useState, useEffect } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    if (props.isEditing) {
      setInputText(props.currentTodo.text);  // Pre-fill the input with the text to edit
    } else {
      setInputText('');  // Clear the input when not editing
    }
  }, [props.isEditing, props.currentTodo]);

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      handleAddOrUpdate();  // Handle both add and update
    }
  };

  const handleAddOrUpdate = () => {
    if (props.isEditing) {
      props.updateListItem(inputText);  // Update if in editing mode
    } else {
      props.addList(inputText);  // Add new todo if not in editing mode
    }
    setInputText("");
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyDown={handleEnterPress}
      />
      <button className="add-btn" onClick={handleAddOrUpdate}>
        {props.isEditing ? "Update" : "Add"}
      </button>
    </div>
  );
}

export default TodoInput;
