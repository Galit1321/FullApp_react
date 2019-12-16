import React from "react";
import Field from "./Field";

import axios from "axios";


class Login extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.handleUserInsertion = this.handleUserInsertion.bind(this);
    this.handlePasswordInsertion = this.handlePasswordInsertion.bind(this);
    this.state = {
      data: [],
      username: "",
      password: "",
      submitted: false,
      loading: false,
      error: ""
    };
  }

  loginTo = () => {
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    if (!(user.username && user.password)) {
      return;
    }
    axios.post(`http://localhost:3001/api/findUser`, { user }).then(res => {
      console.log("line 34 "+res);
      const { history } = this.props;
      console.log("line 36" +res.data.success);
      if(res.data.success){
        history.replace("/Game");
      }
    });
  };

  handleUserInsertion = value => {
    this.setState({ username: value });
  };

  handlePasswordInsertion = value => {
    this.setState({ password: value });
  };


  render() {
    return (
      <div className="container">
      <div className="signup">
      <div className="header">
      <h3>Login</h3>
    </div>
        <Field 
        title="userName"
          type_field="text"
          content={this.handleUserInsertion}
        />
        <Field
          type_field="password"
          title="password"
          content={this.handlePasswordInsertion}
        />
        <div className="button_cont" align="center" onClick={this.loginTo}>
          <button className="btn" onClick={this.loginTo}>
            <span>Login</span>
          </button>
        </div>
      </div>
      </div>
    );
  }
}

export default Login;
