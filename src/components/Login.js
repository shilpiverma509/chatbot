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
   this.props.history.push({pathname:"/home",email:this.state.email});
 }
  handleInputChange = (e)=>(
    this.setState({[e.target.name]:e.target.value})
  )

    render(){
        return (
          <div className="container">
          <h1 className="login-page">Login Page</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Enter Email: </label>
                  <div className="col-sm-8">
                    <input className="form-control" type="email" name="email" value={this.state.email} onChange={this.handleInputChange} placeholder="Email" required  />
                  </div>
              </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Enter Password: </label>
                  <div className="col-sm-8">
                    <input className="form-control" type="password" name="password" value={this.state.value} onChange={this.handleInputChange} placeholder="password" required/>
                  </div>
                </div>
                <div className="text-center">
                <button type="submit" className="btn btn-primary mb-2">Login</button>
                </div>
              </form>
            </div>
        )
    }
}

export default Login;