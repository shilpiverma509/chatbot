import React from "react";

class ChatMessage extends React.Component{
  render(){
    return (
      <div>
       <span className="user-name">{this.props.name}</span>
       <span className="chat-message">{this.props.message}</span>
      </div>
    )
  }
}

export default ChatMessage;