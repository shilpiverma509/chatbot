import React from "react";
import UserChatInput from './UserChatInput';
import ChatMessage from './ChatMessage';
import {connect} from "react-redux";
import {fetchChat,addNewMessage} from '../actions/actions'
import { withRouter } from "react-router-dom";
import ChatHistory from "./ChatHistory";

const URL = "wss://echo.websocket.org/"
class ChatWindow extends React.Component{
 
 state={
      name:"Shilpi",
    // messages:[]
    }
  
  ws = new WebSocket(URL);
  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected');
      this.props.fetchChat(this.state.name);

      
    }

    this.ws.onmessage = evt => {
      console.log("data",evt.data, this.props);
      // on receiving a message, add it to the list of messages
      // const message = evt.data;
      const messageReceived = {name: 'Bot', message: evt.data};
      this.handleAddMessages(messageReceived)
    //   let chat;
    //   console.log(this.props.fetchChatHistory[this.state.name]);
    // if(this.props.fetchChatHistory[this.state.name]) {
    //   chat = this.props.fetchChatHistory[this.state.name].chat.concat(messageReceived);
    // } else {
    //   chat = [messageReceived];
    // }
    // this.props.addNewMessage({name: this.state.name, chat });  
  }

    this.ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(URL),
      })
    }
  }
  handleChange = (e)=>(
      this.setState({name:e.target.value})
  )
  handleAddMessages = (newMessage)=>{
    console.log("NEwmessage",newMessage, this.props.fetchChatHistory[this.state.name]);
    let chat;
    // this.setState((state)=>({messages:[...state.messages, newMessage]}))
    if(this.props.fetchChatHistory[this.state.name]) {
      chat = this.props.fetchChatHistory[this.state.name].concat(newMessage);
    } else {
      chat = [newMessage];
    }
    // this.handleAddMessages(messageSent);
    this.props.addNewMessage({ [this.state.name]: chat });

  }

  handleSignOut= (e)=>{
    this.props.history.push("/");
  }

  handleSubmitMessage = (sentMessage) => {
    console.log("handle");
    //onsubmitting the form send the message and add it to messages list and reset the input
    this.ws.send(sentMessage);
    const messageSent = {name: this.state.name, message: sentMessage};
    let chat;
    if(this.props.fetchChatHistory[this.state.name]) {
      chat = this.props.fetchChatHistory[this.state.name].concat(messageSent);
    } else {
      chat = [messageSent];
    }
    // this.handleAddMessages(messageSent);
    this.props.addNewMessage({ [this.state.name]: chat });
  }

  render(){
    console.log("props",this.props.fetchChatHistory, this.state);
    return (
      <div> 
        <label>Name:</label>
        <input 
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Enter Your Name"
        />  
        <UserChatInput
          onSubmitMessage={(messages)=>this.handleSubmitMessage(messages)}
         />
         {/* {this.state.messages.map((item,index)=>
          <ChatMessage
            key={index}
            name={item.name}
            message = {item.message}
          />,
        )} */}
          {(this.props.fetchChatHistory.Shilpi && this.props.fetchChatHistory.Shilpi.length>0)
            ? <ChatHistory {...this.props}/> : null }
        <button type="button" onClick={this.handleSignOut}>Sign Out</button>
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