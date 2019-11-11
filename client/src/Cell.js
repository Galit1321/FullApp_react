import React, { Component } from "react";
import "./css/Cell.css";


class Cell extends Component{
    render(){
        return (
           <div className="cell">{this.props.num}
           </div>
        );
    }
}
export default Cell;
