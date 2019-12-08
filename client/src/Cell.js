import React, { Component } from "react";
import "./css/Cell.css";


class Cell extends Component{
    render(){
        const data=this.props.parm;
        if (data.full){
            return (<div className={data.kind}> hey {data.id}
                </div>);
        }
        return (
            <div className="emptyCell"> {data.id}
            </div>       
        );
    }
}
export default Cell;
