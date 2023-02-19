import React, { Component } from 'react';
import './App.css';
import {Login, Input, Messages} from "./components"
import getAvatar from "./services/getAvatar";



class App extends Component {


  state = {
    messages: [],
    member: {
      username:"",
      color:getAvatar()
    }}

// **********************GET USERNAME******************

  getUserName=async (name)=>{

           await this.setState({ member: { ...this.state.member, username: name } });

// **********************SET UP DRONE******************

          this.drone = new window.Scaledrone("A5y5QkfsVDEXg2Kj", {data: this.state.member});

          this.drone.on('open', error => {
             if (error) { 
            return console.error(error);
             }
             const member = {...this.state.member};
             member.id = this.drone.clientId;
             this.setState({member});
          });

          const room = this.drone.subscribe("observable-room");
          room.on('data', (data, member) => {
             const messages = this.state.messages;
             messages.push({member, text: data});
             this.setState({messages});
          });

  };



  onSendMessage = (message) => {
        this.drone.publish({
        room: "observable-room",
        message
        });
  }


render(){
 
  const username=this.state.member.username;

return(
  <div className="App">
    {!username? <Login getUserName={this.getUserName}/> 
    : <> 
       <div className='app-header'>
       <h1>Chat app</h1>
       </div>
       <Messages messages={this.state.messages} currentMember={this.state.member}/>
       <Input onSendMessage={this.onSendMessage}/>
      </>
    }

  </div>
)
}
}

export default App;
