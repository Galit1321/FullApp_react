import React, { Component } from "react";
import "./css/Field.css"
class Field extends Component{

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state={
          title: this.props.title,
        }
      }

      handleChange(e) {
        this.props.content(e.target.value); 
        this.setState({ title: ""});      
      }
      
render(){

    return (
    <div className="page">
    <label className="field a-field a-field_a1">
    <span className="a-field__label-wrap">
        <span className="a-field__label">{this.state.title}</span>
      </span>
      <input className="field__input a-field__input" type={this.props.type_field}
    onChange={this.handleChange} 
     required/>
      
    </label>
  
  </div>
      
   );}
}
export default Field;
