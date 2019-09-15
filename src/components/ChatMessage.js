import React from "react";

class ChatMessage extends React.Component{
  render(){
    return (
      <div>
       <strong>{this.props.name}</strong>{this.props.message}
      </div>
    )
  }
}

export default ChatMessage;