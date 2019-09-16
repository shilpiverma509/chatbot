import React from "react";
import UserChatInput from './UserChatInput';
import {connect} from "react-redux";
import {fetchChat,addNewMessage} from '../actions/actions'
import { withRouter } from "react-router-dom";
import ChatHistory from "./ChatHistory";

const URL = "wss://echo.websocket.org/"
class ChatWindow extends React.Component{
 state={
      username:this.props.location.email
    }
  ws = new WebSocket(URL);
  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      this.props.fetchChat(this.state.username);

      
    }

    this.ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      // const message = evt.data;
      const messageReceived = {name: 'Bot', message: evt.data};
      this.handleAddMessages(messageReceived)
  }

    this.ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(URL),
      })
    }
  }
 
  handleAddMessages = (newMessage)=>{
    let chat;
    if(this.props.fetchChatHistory[this.state.username]) {
      chat = this.props.fetchChatHistory[this.state.username].concat(newMessage);
    } else {
      chat = [newMessage];
    }
    this.props.addNewMessage({...this.props.fetchChatHistory, [this.state.username]: chat });

  }

  handleSignOut= (e)=>{
    this.props.history.push("/");
  }

  handleSubmitMessage = (sentMessage) => {
    //onsubmitting the form send the message and add it to messages list and reset the input
    this.ws.send(sentMessage);
    const messageSent = {name: this.state.username, message: sentMessage};
    this.handleAddMessages(messageSent);
  }

  render(){
    return (
        <div className="chat-container">
          <button type="button" onClick={this.handleSignOut} className="btn btn-secondary sign-out-btn">Sign Out</button>
        <div className="col-sm-8 chat"> 
        <UserChatInput
          onSubmitMessage={(messages)=>this.handleSubmitMessage(messages)}
          />
        {(this.props.fetchChatHistory[this.state.username] && this.props.fetchChatHistory[this.state.username].length>0)
          ? <ChatHistory  {...this.props} /> : null }
        </div> 
        </div>
    )
  }
}

const mapStateToProps = (state)=>({
  fetchChatHistory:state.chatHistory
}
)
const mapDispatchToProps = {
  fetchChat,
  addNewMessage
}

export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(ChatWindow));