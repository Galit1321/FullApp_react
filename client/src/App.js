import React, { Component } from "react";

import Clock from "./Clock"
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import './css/App.css';
import Register from "./Register";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false
    }
  }
  
  render() {
      return (
        <Router>
 <div>
      
      <Switch>
      <Route  path='/' exact component={Home}/> 
      <Route  path='/Register' component={Register}/> 
      </Switch>
 
      </div>
        </Router>
     
      
    );
  }
}

const Home = ()=> (
  <div>
 <Clock></Clock>
     <div class="button_cont" align="center">
     <a class="example_f" href="http://localhost:3000/Register" target="_blank" rel="nofollow">
     <span>Register</span></a></div>
  </div>
);


export default App;