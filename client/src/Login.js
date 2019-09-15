import React from "react";
import Field from "./Field";
import { Link } from "react-router-dom";
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
      name: this.state.name,
      password: this.state.password
    };
    if (!(user.name && user.password)) {
      return;
    }
    axios.post(`http://localhost:3001/api/findUser`, { user }).then(res => {
      console.log(res);
      console.log(res.data.success);
    });
  };

  handleUserInsertion = value => {
    this.setState({ name: value });
  };

  handlePasswordInsertion = value => {
    this.setState({ password: value });
  };
  render() {
    return (
      <div className="login">
        <Field
          remark="userName"
          type_field="text"
          content={this.handleUserInsertion}
        />
        <Field
          remark="password"
          type_field="password"
          content={this.handlePasswordInsertion}
        />
        <div className="button_cont" align="center" onClick={this.loginTo}>
          <Link className="example_f" to="/">
            <span>Login</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
