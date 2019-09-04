import React, { Component } from "react";

import Clock from "./Clock"
import axios from "axios";
import Field from "./Field";


class App extends Component {

  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
    id: 0,
      data:[],
      name: null,
      password:null
   
  };}

  handlePasswordChange=(value)=>{
    this.setState({password:value})
  }

  handleNameChange=(name_value)=>{
    this.setState({name:name_value})
  }
  putDataToDB = () => {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }
    console.log("b4post");
    axios.post("http://localhost:3001/api/putData", { 
      id: idToBeAdded,
      name:this.state.name,
      password:this.state.password
      });console.log("afterpost");
  };
 
  render() {
    return (
      <div>
      <Clock></Clock>
        
    <Field    content={this.handleNameChange}
    remark="insert name"></Field>
  
    <Field remark="insert password"  content={this.handlePasswordChange} />
          <button onClick={() => this.putDataToDB()}>
            ADD
          </button>
        </div>
      
    );
  }
}

export default App;