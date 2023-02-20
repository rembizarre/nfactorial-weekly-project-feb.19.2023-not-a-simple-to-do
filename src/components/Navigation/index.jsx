import React, { useState } from 'react'
import AddNewTodo from '../Popup/AddNewTodo';
import './index.scss';
import plus from '../../images/plus.svg'

export default function Navigation(props) {
    const { addTodo, onTypeChange, getTodoType} = props;

    //hook to work with opening/closing of popup
    const [isPopup, setIsPopup] = useState(false);

    //function to  display selected type of todo
    const handlerType = (type) => {
        onTypeChange(type)
    }

    // function to close popup
    const closePopup = () => {
        setIsPopup(false)
    }

  return (
    <div className='felx navigation'>
        <div className='flex navigation__top'>
            <div className='navigation__buttons'>
                <button className={getTodoType === "To do" ? 'navigation__button navigation__button_active' : 'navigation__button'} onClick={() => handlerType('To do')}> To do</button>
                <button className={getTodoType === 'Done' ? 'navigation__button navigation__button_active' : 'navigation__button'} onClick={() => handlerType('Done')}>Done</button>
                <button className={getTodoType === 'Trash' ? 'navigation__button navigation__button_active' : 'navigation__button'} onClick={()=> handlerType('Trash')}>Trash</button>
            </div>
            <div className='navigation__add-wrapper'>
                <button className='flex navigation__add' onClick={()=> setIsPopup(!isPopup)}><img src={plus} alt="plus" /></button>
                { isPopup ? <AddNewTodo addTodo={(name) => addTodo(name)} closePopup={closePopup}/> :''}
            </div>
        </div>
        <div className='navigation__header'>
            <h2>{ getTodoType} </h2>
        </div>
    </div>
  )
}
