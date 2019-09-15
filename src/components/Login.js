import React from "react";
import ChatWindow from './ChatWindow'

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
      isLogin:false
      
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 handleSubmit(e) {
   e.preventDefault();
   window.location.pathname ="/home";
 }
  handleInputChange = (e)=>(
    this.setState({[e.target.name]:e.target.value})
  )

    render(){
        return (
          <div className="container">
            <form onSubmit={this.handleSubmit} className="input-form">
              <div>
                  <label className="input-email">Enter Email: </label>
                  <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} placeholder="Email"  />
              </div>
              <div>
                <label className="input-password">Enter Password: </label>
                <input type="password" name="password" value={this.state.value} onChange={this.handleInputChange} placeholder="password"/>
              </div>  
                <button type="submit" className="btn-submit">Login</button>
              </form>
              {this.state.isLogin && <ChatWindow {...this.props} />}
            </div>
        )
    }
}

export default Login;