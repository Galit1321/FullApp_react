import React from "react";


class ToDoList extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            cnt:0
        }
    }

    inc=()=>{
        this.setState({cnt: this.state.cnt+1});
    };

    dec=()=> {
        if (this.state.cnt===0){
            return;
        }
        this.setState({cnt: this.state.cnt-1});
    }
    render(){
        return (
            <div> 
            <h1>{this.state.cnt}</h1>
            <button onClick={this.dec}>-</button>
            <button onClick={this.inc}>+</button>
            </div>
        )    }
}

export default ToDoList;