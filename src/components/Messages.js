import {React,Component} from "react";
import { nanoid } from 'nanoid'

const randomId=nanoid();

class Messages extends Component {

    renderMessage=({member, text} )=> {
        // const {member, text} = message; 
        const {currentMember} = this.props;
        const messageFromMe = member.id === currentMember.id;
        const className = messageFromMe ? "Messages-message currentMember" : "Messages-message"
        ;
        return (
          <li  className={className} key={randomId}>
            <span className="avatar" style={{backgroundImage:member.clientData.color, objectFit:"contain"}}/>
            <div className="Message-content">
              <div className="username">
                {member.clientData.username}
              </div>
              <div className="text">{text}</div>
            </div>
          </li>
        );
      }


  render() {
    const {messages} = this.props;
    return (

      <ul className="Message-list">
        {messages.map(m => this.renderMessage(m))}
      </ul>
    );
  }
}

export default Messages;

