import React, { Component } from "react";
import "./css/Cell.css";
import Cell from "./Cell"

class Game extends Component{
    constructor(props){
        super(props);
        this.state={
            score:0,
            name:props.name,
            data:[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/getScore')
            .then(result => result.json())
            .then(res => this.setState({score:res.score}))
    }
    render(){
        const score=this.state.score;
        const data= this.state.data;
        return (<div >
        <div>
        <h1> {score}</h1>
        <p1> Welcome to the game </p1>   
        </div>
        
        <table>
        <tbody>
          {data.length <= 0
            ? "NO DB ENTRIES YET"
            : data.map(dat => (
                <tr  key={dat}  >
                    {dat.map(elem => (
                        <th > <Cell  kind="cell" num={elem} /> </th>
                    ))}
                </tr>
              ))}
              </tbody>
                </table>
            

        
    
        </div>);

    }
} 
export default Game;