import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


export default class Login extends Component {
    state={
        username:""
    }
  

    handleSubmit=(e)=>{
      e.preventDefault();
      if(this.state.username === "" ){
        return (alert("Please enter your username to continue"))
      }

      this.props.getUserName(this.state.username);
   
     }

  
    onValueChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });

    }       
    
  render() {
    return (
        
        <form className="Login-form" onSubmit={e => this.handleSubmit(e)}>
        <input className="Login-input" type="text" autoFocus placeholder='Enter your username' value={this.state.username} name='username' onChange={e => this.onValueChange(e)}/>
        <Button type='submit' size="lg" variant="light">Enter chatroom</Button>
        </form>
    )
  }
}
