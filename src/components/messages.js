import React from 'react'

//props passes the values to be called in App.js
const Messages = (props) => {
    return (
        <div>
        <ul>
            {props.listOfMessages}
        </ul>
        <input value={props.thisMessage} onChange = {props.recordMessage} />
        <button onClick={props.addMessage}>ENTER</button>
        </div>
    )
}

//exports the values to be imported on App.js
export default Messages
