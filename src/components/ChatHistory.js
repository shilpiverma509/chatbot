import React from "react";

class ChatHistory extends React.Component {
  render(){
    const chatHistory = this.props.fetchChatHistory[this.props.location.email];
    return(
    <div>
     {chatHistory.map((chat,index)=>{
       return(
         <div className="chat-container" key={index}>
          <div className={chat.name!=="Bot"? "user-chat":"bot-chat"}>
            <span className="name">{chat.name}</span>
            <span className="chat-message">{chat.message}</span>
          </div>
        </div>
       )
     })}
    </div>
    )
  }
}
export default ChatHistory;