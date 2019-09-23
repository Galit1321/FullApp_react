
import React from 'react';

import ReactPlayer from "react-player";

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
            <table>
          {data.length <= 0
            ? "NO DB ENTRIES YET"
            : data.map(dat => (
                <tr className="tr_row" key={dat}>
                <td>{dat.name}</td>
                  <td>
                    <ReactPlayer url={dat.url}/>
                  </td>
                </tr>
              ))}
        
      </table>
            </div>
        )};
}

export default Bar;