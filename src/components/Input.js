import {Component} from "react";
import React from "react";
import Button from 'react-bootstrap/Button';


class Input extends Component {
  state = {
    text: ""
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.state.text === "" ? (alert("You can not send empty message,please write your message.")):
    this.setState({text: "" });
    this.props.onSendMessage(this.state.text);
  }

  render() {
    return (
      <div>
        <form className="message-form" onSubmit={e => this.onSubmit(e)}>
          <input
            className="message-input-field"
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Type your message..."
            autoFocus
             />
            <Button type='submit' size="lg" variant="light"> send</Button>
        </form>
      </div>
    );
  }
}

export default Input;