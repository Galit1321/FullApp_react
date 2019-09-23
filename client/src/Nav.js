import React from "react";
import "./App";
import { Link } from "react-router-dom";
import Image from './resources/kissclipart-hot-chocolate-clipart-hot-chocolate-marshmallow-cl-4e1822fb368fa8c9.png';
import Clock from "./Clock";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
   
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  render() {
    return(
      <div>
      <nav>
      <ul className="nav-links">
          <img src={Image} alt='symbol' />
          <Clock />
          <Link to='/'>
          <li>Home</li>
          </Link>
          <Link to="/Register">
            <li>Register</li>
          </Link>
          <Link to="/Login">
            <li>Login</li>
          </Link>
          <Link to="/YouTube">
            <li>YouTube</li>
          </Link>
        </ul>
    </nav>
      
    </div>
    );
  }
}

export default Nav;
