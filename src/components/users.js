import React from 'react'

const Users = (props) => {
    return (
        <div>
        <ul>
            {props.listOfUsers}
        </ul>
            <input value={props.currentUser} onChange={props.recordUser} />
            <button onClick={props.addUser}>ADD</button>
        </div>
    )
}

export default Users
