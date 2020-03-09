import React, { Component } from 'react';
// imports the Messages.js component allowing for props to pass between
import Messages from './components/messages' 
import Users from './components/users'
import ProfileImg from './logo.svg'
import './App.css';

class App extends Component {
  // init all the states, can be empty like currentMessage
  state = {
    allMessages: [
      {user:"Owen", message: "Shaya", time: "12:34", profileImg: ProfileImg},
      {user:"Shaya", message: "sorry for late reply, was losing on Halo", time: "03:04", profileImg: ProfileImg},
      {user:"Owen", message: "you suck", time: "05:50", profileImg: ProfileImg}, ],
    currentMessage: {user:"", message: "", time: "", profileImg: ProfileImg},
    users: ["Owen", "Shaya"],
    currentUser: "",
    showHideUsers: true,
  }




// changes the state of currentMessage to any change in the input box, the event is the 'onChange'
recordMessageHandler = (event) => {
    this.setState({
      currentMessage: {user: "Katie", message: event.target.value, time: "20:37", profileImg: ProfileImg}
    }) 
    console.log(this.state.currentMessage)
}

// sets the state of allMessages to all the messages in the array using the spread operator and adds the input box value on event, event is keypress Enter
addMessageHandler = () => {
    this.setState({
      allMessages: [...this.state.allMessages, this.state.currentMessage],
      currentMessage: {user: "", message: "", time: "", profileImg: ""},
    })
}

recordUserHandler = (event) => {
    this.setState({
      currentUser: event.target.value
    })
}

checkExistUserHandler = () => {
  for (let i = 0; i <= this.state.users.length; i++) {
    if (this.state.currentUser === this.state.users[i]) {
      console.log("already exists")
    }
  }
} 

addUserHandler = () => {
  if (this.state.currentUser !== "") {
    this.setState({
      users: [...this.state.users, this.state.currentUser],
      currentUser: "",
    })}
}

showHideHandler = () => {
  if (this.state.showHideUsers === true) {
    this.setState({
      showHideUsers: false
        })
  } else {
  this.setState({
    showHideUsers: true
  })}
}

render() {

//cycles through everyMessage and displays each index as a list item
  const everyMessage = this.state.allMessages.map((content,index) => {
    return <li key={index}>
    <img src={content.profileImg} />
    <h4>{content.user}</h4>
    <p>{content.message}</p>
    <p>{content.time}</p>
    </li>
  })

  const allUsers = this.state.users.map((users, index) => {
    return <li key={index}>{users}</li>
  })

  const showHideUsers = () => {
    if (this.state.showHideUsers === true) {
      return <Users
      listOfUsers = {allUsers}
      currentUser = {this.state.currentUser}
      recordUser = {this.recordUserHandler}
      addUser = {this.addUserHandler}
    />
    }
  }

//updates all values from Messages component using props in Messages.js
  return (
    <div className="App">
      <Messages 
        listOfMessages= {everyMessage}
        thisMessage= {this.state.currentMessage.message}
        addMessage = {this.addMessageHandler}
        recordMessage = {this.recordMessageHandler}
      />
    <button onClick={this.showHideHandler}>Show/Hide</button>
    {showHideUsers()}
    <button onClick={this.checkExistUserHandler}>CHECK</button>
    </div>
  );
}}

export default App;
