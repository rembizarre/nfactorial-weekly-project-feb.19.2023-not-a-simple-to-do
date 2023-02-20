import React, { useState } from 'react'
import './index.scss';

export default function AddNewTodo(props) {
    const {addTodo, closePopup} = props;

    //hook to work with typed text of todo
    const [name, setName] = useState('');
    //sending name of new todo
    const addTodoHandler = () => {
        if(name !== '') {
            addTodo(name);
            closePopup()
        }
    }
  return (
    <div className='flex popup-add'>
        <h2>Add New To Do</h2>
        <textarea placeholder='Your text' value={name} onChange={e => setName(e.target.value)}></textarea>
        <div className='popup-add__button' onClick={addTodoHandler}>Add</div>
    </div>
  );
}
