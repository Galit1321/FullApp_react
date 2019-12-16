import React, { Component } from "react";
import Video from './Video';

class PlayList extends Component{

    constructor(props) {
        super(props);
        this.state = {
          data:[{artist:"taylor swift",song:"Lover",url:"https://www.youtube.com/watch?v=-BjZmE2gtdo",}],
        };
      }
     
     
render(){
    const data=this.state.data;
    return(
            <div>
            <div className="header1">
            <h2 >Welcome to My Play List</h2>
            </div>
           
            {data.length <= 0
            ? "NO DB ENTRIES YET"
            : data.map(dat => (
              <Video data={dat}/>
              ))}
        
          
            </div>
            );
}
}

export default PlayList;