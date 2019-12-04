import React, { Component } from "react";
import "./css/Cell.css";
import Cell from "./Cell"

class Game extends Component{
    constructor(props){
        super(props);
        let data=[];
        this.state={
            score:0,
            name:props.name,
            data: data,
        }
    }

    addElem(){
        let rr1,rc1;
        do {
            rr1=Math.floor(Math.random() * 4); 
            rc1=Math.floor(Math.random() * 4);
        }
        while (this.state.data[rr1][rc1].full);
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                [prevState.data[rr1][rc1].full]: e.target.value,
            },
        })); 
    }

    changeCell =()=>{
        this.data[0][0].id=3;

    
    }
    createData() {
        let res=[];
        let id=1;
        for (let i=0;i<4;i++){
            for (let j=0;j<4;j++){
            res.push({id:id , kind: "cell" ,full: false,});
            id++;
        }
        this.state.data.push(res);
        res=[];
        }
        this.addElem();
        this.addElem();
    }

    componentDidMount() {
        this.createData();
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
                        <th> 
                        <Cell parm={elem} /> 
                        </th>
                    ))}
                </tr>
              ))}
              </tbody>
                </table>
                    <button onClick={this.changeCell} > ClickMe</button>
    
        </div>);

    }
} 
export default Game;