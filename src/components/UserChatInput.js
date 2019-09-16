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
    this.props.onSubmitMessage(this.state.message)
    this.setState({message:""})
  }
  render(){
    const isMessageValid=this.state.message && this.state.message !==" " && this.state.message.length>0;
    return(
      <form onSubmit={this.handleSubmit}>
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            placeholder="Enter your message"
            value={this.state.message}
            onChange={this.handleChange}
            className="form-control" aria-label="username chat" aria-describedby="basic-addon2"
            />
            {isMessageValid ?
              <button className="btn btn-outline-primary chat-submit-btn"type="submit">Send</button>
            :
              <button className="btn btn-outline-primary chat-submit-btn"type="submit" disabled>Send</button>
            }
          </div>
        </div>

      </form>

    )
  }
}

UserChatInput.propTypes = {
  onSubmitMessage: PropTypes.func.isRequired
}


export default UserChatInput;