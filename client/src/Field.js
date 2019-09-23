import React, { Component } from "react";

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
    
    <div style={{ padding: "10px" }}>
    <input 
    type={this.props.type_field}
    onChange={this.handleChange} 
    placeholder={this.props.remark}
    style={{ width: "200px" }}
    /></div>);}
}
export default Field;
