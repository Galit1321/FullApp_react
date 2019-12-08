import React, { Component } from "react";
import axios from "axios";
import Field from "./Field";
import "./css/Register.css"

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      id: 0,
      data: [1,2,3,4],
      user_name:null,
      name: null,
      password: null,
      email: null,
    };
  }
 
  handlePasswordChange = value => {
    this.setState({ password: value });
  };

  handleUserChange = value => {
    this.setState({ user_name: value });
  };


  handleNameChange = name_value => {
    this.setState({ name: name_value });
  };

  handleEmailChange = name_value => {
    this.setState({ email: name_value });
  };

  putDataToDB = () => {
    this.setState({id: this.state.id++})
    axios.post("http://localhost:3001/api/putUser", {
      id: this.state.id,
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
      user_name:this.state.user_name,
    }).then(res => {
      const { history } = this.props;
      console.log(res.data.success);
      if(res.data.success){
        history.replace("/Login");
      }
    });
  };

 
  render() {
    //const { data } = this.state;
    return (
      <div className="container">
      <div className="signup">
      <div className="header">
        <h3>Sign Up</h3>
        <p>You want to fill out this form</p>
    </div>
    <div className="sep"></div>
        <Field
          type_field="text"
          title="Name"
          content={this.handleNameChange}
          
        />

        <Field
         
          type_field="password"
          title="Password"
          content={this.handlePasswordChange}
        />
        <Field
          
          type_field="email"
          title="Email"
          content={this.handleEmailChange}
        />
        <Field
          
          type_field="user Name"
          title="UserName"
          content={this.handleUserChange}
        />
          <div className="checkboxy">
                <input name="cecky" id="checky" value="1" type="checkbox" /><label className="terms">I accept the terms of use</label>
            </div>
            <button className="btn" onClick={() => this.putDataToDB()}>ADD</button>
        </div>
        
      </div>
       
 
    );
  }
}

export default Register;


/*
<ul>
          {data.length <= 0
            ? "NO DB ENTRIES YET"
            : data.map(dat => (
                <li style={{ padding: "10px" }} key={dat}>
                  <span style={{ color: "gray" }}> id: </span> {dat.id} <br />
                  <span style={{ color: "gray" }}> data: </span>
                  {dat.name}
                </li>
              ))}
        </ul>
*/