class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            img:this.props.img,
            name: this.props.name
        }
    }


    render(){
        return (
            <div>
                <img src={this.props.img}></img>
            </div>
        );
    }
}
export default Profile;