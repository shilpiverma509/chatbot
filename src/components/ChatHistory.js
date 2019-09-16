import React from "react";

class ChatHistory extends React.Component {
  render(){
    const chatHistory = this.props.fetchChatHistory.Shilpi
    return(
    <div>
     {chatHistory.map((chat,index)=>{
       return(
        <div key={index}>
          <span className="user-name">{chat.name}</span>
          <span className="chat-message">{chat.message}</span>
        </div>
       )
     })}
    </div>
    )
  }
}
export default ChatHistory;