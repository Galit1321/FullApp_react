import React from 'react';
import ReactPlayer from 'react-player';




class Video extends React.Component{
    constructor(props) {
        super(props);
        let data=props.data;
        this.state={
            url:data.url,
            name:data.artist,
            song: data.song,
        }
      }

      
    render(){
        
        return(<div className="videoContainer">
        <h3>{this.state.song}</h3>
        <h3>{this.state.name}</h3>
        <ReactPlayer url={this.state.url}></ReactPlayer>
        </div>);
    }
}
export default Video;