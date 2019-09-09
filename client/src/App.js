import React, { Component } from "react";

import Clock from "./Clock"
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import './css/App.css';
import Register from "./Register";
import Nav from "./Nav"
import Login from "./Login";


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
      <Nav isLoggedIn={false}/>
      <Switch>
      <Route  path='/' exact component={Home}/> 
      <Route  path='/Register' component={Register}/> 
      <Route path='/Login' component={Login}/>
      </Switch>
 
      </div>
        </Router>
    );
  }
}

const Home = ()=> (
  <div>
 <Clock></Clock>
     
  </div>
);


export default App;