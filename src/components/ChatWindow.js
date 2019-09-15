import React from "react";
import UserChatInput from './UserChatInput';
import ChatMessage from './ChatMessage';
import {connect} from "react-redux";
import {fetchChat,addNewMessage} from '../actions/actions'
import { withRouter } from "react-router-dom";




const URL = "wss://echo.websocket.org/"
class ChatWindow extends React.Component{
 
 state={
      name:"Shilpi",
    messages:[]
    }
  
  ws = new WebSocket(URL);
  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected');
    this.props.fetchChat(this.state.name);
      
    }

    this.ws.onmessage = evt => {
      console.log("data",evt.data)
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
  handleChange = (e)=>(
      this.setState({name:e.target.value})
  )
  handleAddMessages = (newMessage)=>{
    console.log("NEWM",newMessage)
    this.setState((state)=>({messages:[...state.messages, newMessage]}))
    console.log("message",this.state.message)
  }

  handleSignOut= (e)=>{
    // this.props.history.push("/");
    window.location.pathname ="/";

    console.log(this.props.fetchChatHistory);
  }

  handleSubmitMessage = (sentMessage) => {
    console.log("handle");
    //onsubmitting the form send the message and add it to messages list and reset the input
    this.ws.send(sentMessage);
    const messageSent = {name: this.state.name, message: sentMessage};
    this.handleAddMessages(messageSent);
    this.props.addNewMessage({name:this.state.name, messages: this.state.messages});  
  }

  render(){
    console.log("props",this.props);
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
         {this.state.messages.map((item,index)=>
          <ChatMessage
            key={index}
            name={item.name}
            message = {item.message}
          />,
        )}
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

export default connect(mapStateToProps,mapDispatchToProps)(ChatWindow);