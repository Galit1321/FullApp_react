import React, { Component } from "react";
import "./css/Field.css"
class Field extends Component{

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(e) {
        this.props.content(e.target.value);       
      }
      
render(){

    return (
    <div className="page">
    <label className="field a-field a-field_a1">
      <input className="field__input a-field__input" type={this.props.type_field}
    onChange={this.handleChange} 
    placeholder={this.props.remark} required/>
      <span className="a-field__label-wrap">
        <span className="a-field__label">{this.props.title}</span>
      </span>
    </label>
  
  </div>
      
   );}
}
export default Field;
