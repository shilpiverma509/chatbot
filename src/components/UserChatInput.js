import React from "react";
import PropTypes from "prop-types";

/* The message input should clear after the user clicks send */
/* HomePage recieves the onSubmitMessage() prop from Chat component */

class UserChatInput extends React.Component{
  constructor(props){
    super(props);
    this.state={
      message:""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({message:e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.message)
    this.props.onSubmitMessage(this.state.message)
    this.setState({message:""})
  }
  render(){
    return(
      <div className="container">
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter your message"
          value={this.state.message}
          onChange={this.handleChange}
          />
        <button type="submit">Send</button>
      </form>

      </div>
    )
  }
}

UserChatInput.PropTypes = {
  onSubmitMessage: PropTypes.func.isRequired
}


export default UserChatInput;