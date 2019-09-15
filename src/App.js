import React, { Component } from 'react';
import './App.css';
import {Switch,Route,BrowserRouter as Router} from "react-router-dom"
import Login from './components/Login';
import HomePage from "./components/HomePage";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
