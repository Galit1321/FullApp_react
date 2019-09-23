import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";
import Register from "./Register";
import Nav from "./Nav";
import Bar from './Bar';
import Login from "./Login";
import Profile from "./Profile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      isLoggedIn: false
    };
  }
  
  render() {
    return (
      <Router>
        <div>
        <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Register" component={Register} />
            <Route path="/Login" component={Login} />
            <Route path="/Add" component={Profile} />
            <Route path="/YouTube" component={Bar} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const Home = () => (
    <div>
      <h1 >  Welcome to my website</h1>
     
    </div>
  
);

export default App;
