import React, { Component } from "react";
import axios from "axios";
import Field from "./Field";

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      id: 0,
      data: [],
      user_name:null,
      name: null,
      password: null,
      email: null,
      intervalIsSet: false,
      idToDelete: null,
      idToUpdate: null,
      objectToUpdate: null
    };
  }
  /* componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }*/
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

  deleteFromDB = idTodelete => {
    let objIdToDelete = null;
    this.state.data.forEach(dat => {
      if (dat.id === idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete("http://localhost:3001/api/deleteData", {
      data: {
        id: objIdToDelete
      }
    });
  };

  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("http://localhost:3001/api/updateData", {
      id: objIdToUpdate,
      update: { password: updateToApply }
    });
  };

  putDataToDB = () => {
    console.log("start");
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 10;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }
    axios.post("http://localhost:3001/api/putData", {
      id: idToBeAdded,
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
    }).then(res => {
      const { history } = this.props;
      console.log(res.data.success);
      if(res.data.success){
        history.replace("/Login");
       
      }
    });
  };

  getDataFromDb = () => {
    fetch("http://localhost:3001/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };
  render() {
    //const { data } = this.state;
    return (
      <div className="Register">
        
        <Field
          type_field="text"
          title="Name"
          content={this.handleNameChange}
          remark="insert name"
        ></Field>

        <Field
          remark="insert password"
          type_field="password"
          content={this.handlePasswordChange}
        />
        <Field
          remark="insert email"
          type_field="email"
          content={this.handleEmailChange}
        />
        <Field
          remark="insert username"
          type_field="user Name"
          content={this.handleUserChange}
        />
        <button onClick={() => this.putDataToDB()}>ADD</button>
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