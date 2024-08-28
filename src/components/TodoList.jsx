// Todolist.js
import React from 'react';

function Todolist(props) {
  return (
    <li className="list-item">
      {props.item}
      <span className='icons'>
        {/* Edit icon */}
        <i
          className="fa-regular fa-pen-to-square icon-edit"
          onClick={() => props.editItem(props.index)}
        ></i>
        {/* Delete icon */}
        <i
          className="fa-solid fa-trash-can icon-delete"
          onClick={() => props.deleteItem(props.index)}
        ></i>
      </span>
    </li>
  );
}

export default Todolist;
