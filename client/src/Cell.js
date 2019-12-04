import React, { Component } from "react";
import "./css/Cell.css";


class Cell extends Component{
    render(){
        const data=this.props.parm;
        console.log(data);
        if (data.full){
            return (<div className={data.kind}>{data.id}
                </div>);
        }
        return (
            <div className="emptyCell">
            </div>       
        );
    }
}
export default Cell;
