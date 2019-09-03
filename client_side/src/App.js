import React, { Component } from "react";

import Clock from "./Clock"
import axios from "axios";


class App extends Component {

  constructor(props) {
    super(props);
    //this.handleNameChange = this.handleNameChange.bind(this);
    //this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
    id: 0,
      data:[],
      name: null,
      password:null
    
    
  };}

  

  
  putDataToDB = (name,password) => {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("http://localhost:3001/api/putData", { 
      id: idToBeAdded,
      name:name,
      password:password
      });
  };
 
  render() {
    return (
      <div>
      <Clock></Clock>
        <div style={{ padding: "10px" }}>
    <input
    type="text"
  
    onChange={e => this.setState({ name: e.target.value })}
    placeholder="insert name"
    style={{ width: "200px" }}
    /></div>
    
        <div style={{ padding: "10px" }}>
    <input
    type="text"
   
    onChange={e => this.setState({ password: e.target.value })}
    placeholder="insert password"
    style={{ width: "200px" }}
    /></div>
          <button onClick={() => this.putDataToDB(this.state.name,this.state.password)}>
            ADD
          </button>
       
        </div>
      
    );
  }
}

export default App;
