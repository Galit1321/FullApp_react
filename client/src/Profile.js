import React from "react";
import image from "./resources/heart.png";
import ReactPlayer from "react-player";
import Field from "./Field";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "../public/heart.png",
      name: "kitty",
      url: "https://www.youtube.com/watch?v=zYAwaAdgqqs",
      temp: '',
      f_value:''
    };
    
  }
  handleNewURLChange =() => {
    this.setState({ url: this.state.temp ,f_value:''});
  };

  handleURLChange = name_value => {
    this.setState({ temp: name_value });
  };
  render() {
    return (
      <div>
        <img src={image} alt="profile"></img>
        <h1>{this.state.name}</h1>
        <ReactPlayer url={this.state.url} playing />
        <Field
        value={this.state.f_value}
          type_field="text"
          content={this.handleURLChange}
          remark="insert new URL"
        />
        <button onClick={this.handleNewURLChange} >ChangeURL</button>
              </div>
    );
  }
}
export default Profile;
