import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";
import Register from "./Register";
import Nav from "./Nav";
import PlayList from "./Playlist";
import Login from "./Login";
import Game from "./Game";

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
      <div >
        <Router>
          <Nav />
          <div className="Main">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Register" component={Register} />
            <Route path="/Login" component={Login} />
            <Route path="/PlayList" component={PlayList} />
            <Route path='/Game' component={Game}/>
          </Switch>
          </div>
          
        </Router>
      </div>
    );
  }
}

const Home = () => (
  <div>
    <h1> Welcome to my website</h1>
  </div>
);

export default App;
