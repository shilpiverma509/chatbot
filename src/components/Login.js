import React from "react";

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",      
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 handleSubmit(e) {
   e.preventDefault();
   this.props.history.push("/home")
 }
  handleInputChange = (e)=>(
    this.setState({[e.target.name]:e.target.value})
  )

    render(){
      console.log("hey", this.props);
        return (
          <div className="container">
            <form onSubmit={this.handleSubmit} className="input-form">
              <div>
                  <label className="input-email">Enter Email: </label>
                  <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} placeholder="Email" required  />
              </div>
              <div>
                <label className="input-password">Enter Password: </label>
                <input type="password" name="password" value={this.state.value} onChange={this.handleInputChange} placeholder="password" required/>
              </div>  
                <button type="submit" className="btn-submit">Login</button>
              </form>
            </div>
        )
    }
}

export default Login;