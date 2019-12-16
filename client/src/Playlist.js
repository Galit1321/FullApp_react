import React, { Component } from "react";
import Video from './Video';

class PlayList extends Component{

    constructor(props) {
        super(props);
        this.state = {
          data:[{artist:"taylor swift",song:"Lover",url:"https://www.youtube.com/watch?v=-BjZmE2gtdo",},
        {artist:"Ben Platt",song:"Ease My Mind",url:"https://www.youtube.com/watch?v=UCKbw9OJIcg"}],
        };
      }
    /*  componentDidMount() {
        this.getDataFromDb();
      }
      getDataFromDb = () => {
        fetch("http://localhost:3001/api/getData")
          .then(data => data.json())
          .then(res => this.setState({ data: res.data }));
      };
     */
render(){
    const data=this.state.data;
    return(
            <div>
            <div className="Headline">
            <h2 >Welcome to My Play List</h2>
            </div>
           
            {data.length <= 0
            ? "NO DB ENTRIES YET"
            : data.map(dat => (
              <Video key={dat.url} data={dat}/>
              ))}
        
          
            </div>
            );
}
}

export default PlayList;