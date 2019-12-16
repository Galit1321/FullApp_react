import React from 'react';
import "./css/Videos.css"
import Video from './Video';


class Bar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data:[],
        };
      }
      componentDidMount() {
        this.getDataFromDb();
      }
      getDataFromDb = () => {
        fetch("http://localhost:3001/api/getData")
          .then(data => data.json())
          .then(res => this.setState({ data: res.data }));
      };
    render() {
        const data=this.state.data;
        return (
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
        )};
}

export default Bar;