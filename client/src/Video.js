import React from 'react';
import ReactPlayer from 'react-player';
import "./css/Videos.css"




class Video extends React.Component{
    constructor(props) {
        super(props);
        let data=props.data;
        this.state={
            visible:"hiddenYouTube",
            url:data.url,
            name:data.artist,
            song: data.song,
        }
      }

      ChangeVis = () => {
        this.setState({visible: "visibleYouTube"})
      }
    render(){
        
        return(
        <div>
 <div className="videoContainer">
        <div className="header1">
        <h3>{this.state.song}</h3>
        <h3>{this.state.name}</h3>
        <button className="btnPlay" onClick={this.ChangeVis}>Show Video</button>
        </div>
       
        <div className={this.state.visible} >
        <ReactPlayer url={this.state.url}  ></ReactPlayer>
        </div>
        
        </div>
        </div>
       );
    }
}
export default Video;