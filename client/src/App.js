import React, { Component } from "react";

import Clock from "./Clock"
import axios from "axios";
import './css/App.css';
import './Register'
import { Redirect } from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false
    }
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/Register' />
    }
  } 
  
  render() {
      return (
      <div>
      <Clock></Clock>
      <div className="button_cont" align="center">
      <a className="example_f" onClick={this.setRedirect} target="_blank" rel="nofollow">
      <span>Register</span></a></div>
      </div>
      
    );
  }
}

export default App;