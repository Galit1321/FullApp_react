import React from 'react';
import "./App" ;
import {Link} from 'react-router-dom';

class Nav extends React.Component{
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        //this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: this.props.isLoggedIn};
      }

      handleLoginClick() {
        this.setState({isLoggedIn: true});
      }
    
    render(){ 
        const isLoggedIn = this.state.isLoggedIn;
        let body;
    
        if (!isLoggedIn) {
          body = <ul className='nav-links'>
          <Link to='/Register'>
              <li>Register</li>
          </Link>
          <Link to="/Login">
          <li>Login</li>
          </Link>
      </ul>;
        } else {
          body=<ul className='nav-links'>
          <Link to='/Register'>
              <li>logout</li>
          </Link>
        
      </ul>;
        }
        return (
        <nav>
           {body}
        </nav>)
};
}

export default Nav;         