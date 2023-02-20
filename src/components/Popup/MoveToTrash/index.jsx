import React from "react";

export default function MoveToTrash(props) {
    const {handleClickTrashed} = props;

    return <button className="popup-to-trash" onClick={handleClickTrashed}> Move to Trash</button>
    
}