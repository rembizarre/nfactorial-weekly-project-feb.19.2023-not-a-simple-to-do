import React, { useState } from "react";
import MoveToTrash from '../../Popup/MoveToTrash';
import MoveFromTrash from '../../Popup/MoveFromTrash';

export default function ToDo(props) {
    const {
        todo, 
        todoType,
        checkedChange,
        trashedChange,
        deleteChange
    } = props;

    //hooks to handle Popup window and "completed" status
    const [isChecked, setIsChecked] = useState(todo.completed);
    const [isPopup, setIsPopup] = useState(false);

    //function to change status to "completed"
    const handleClickChecked = () => {
        setIsChecked(!isChecked)
        checkedChange(todo.id)
    } 

    //function to sent todo to "trash"
    const handleClickTrashed = () => {
        setIsPopup(!isPopup)
        trashedChange(todo.id)
    }

    //function to delete
    const handleClickDelete = () => {
        setIsPopup(!isPopup)
        deleteChange(todo.id)
    }

    return (
        <li className={isPopup ? 'flex todo todo_chosen' : 'flex todo'}>
            <button className="todo__control" onClick={()=> setIsPopup(!isPopup)}></button>
            <button className={isChecked ? 'todo__check todo__check_checked' : 'todo__check'} onClick={handleClickChecked}></button>
            <h3 className={isChecked ? 'todo__text todo__text_checked' : 'todo__text'}>{todo.name}</h3>
            { isPopup ? (todoType === 'To do' || todoType === 'Done' ? <MoveToTrash handleClickTrashed={handleClickTrashed} /> : (todoType === 'Trash' ? <MoveFromTrash handleClickTrashed={handleClickTrashed} handleClickDelete={handleClickDelete} /> : '')) : '' }
        </li>
    )
}

