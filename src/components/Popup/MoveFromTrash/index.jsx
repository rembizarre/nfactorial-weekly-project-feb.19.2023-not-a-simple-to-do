import React from 'react';

export default function MoveFromTrash(props) {
    const {handleClickTrashed, handleClickDelete} = props;

  return (
    <div className='flex popup-from-trash'>
        <button className='popup-from-trash__delete' onClick={handleClickDelete}> Delete forever</button>
        <button className='popup-from-trash__to-do' onClick={handleClickTrashed}>Move back to To Do</button>
    </div>
  )
}
 