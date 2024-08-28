import React, { useState, useEffect } from 'react';
import "./App.css";
import TodoInput from './components/TodoInput';
import Todolist from './components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState(() => {
    // Initialize state from local storage or set it to an empty array if not present
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  // Save todos to local storage whenever listTodo changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(listTodo));
  }, [listTodo]);

  const addList = (inputText) => {
    if (inputText !== '') {
      setListTodo((prevTodos) => [...prevTodos, inputText]); // Add new todo to the list
    }
  };

  const deleteListItem = (key) => {
    setListTodo((prevTodos) => prevTodos.filter((_, index) => index !== key)); // Remove the specified todo from the list
  };

  const editListItem = (index) => {
    setIsEditing(true);
    setCurrentTodo({ index, text: listTodo[index] }); // Set the current todo being edited
  };

  const updateListItem = (text) => {
    setListTodo((prevTodos) => {
      const newList = [...prevTodos];
      newList[currentTodo.index] = text; // Update the specified todo in the list
      return newList;
    });
    setIsEditing(false);
    setCurrentTodo({});
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput
          addList={addList}
          isEditing={isEditing}
          currentTodo={currentTodo}
          updateListItem={updateListItem}
        />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => (
          <Todolist
            key={i}
            index={i}
            item={listItem}
            deleteItem={deleteListItem}
            editItem={editListItem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
