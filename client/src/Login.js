import React from 'react';
import Field from "./Field"
import {Link} from 'react-router-dom';


class Login extends React.Component{
    
    constructor(props){
        super(props);
        this.handleUserInsertion = this.handleUserInsertion.bind(this);
        this.handlePasswordInsertion = this.handlePasswordInsertion.bind(this);
        this.state={
            id: 0,
            data:[],
            name: null,
            password:null
        }
    }

    loginTo=()=>{
        this.state.
    }


    handleUserInsertion=(value)=>{
        this.setState({name:value})
      }
      
      handlePasswordInsertion=(value)=>{
        this.setState({password:value})
      }
    render(){
        return (<div className='login'>
         <Field remark="userName"  type_field="text" content={this.handleUserInsertion} />
            <Field remark="password" type_field="password"  content={this.handlePasswordInsertion} />
            <div className="button_cont" align="center" onClick={}>
     <Link  class="example_f" to='/' >
     <span>Login</span></Link></div>
        </div>)

    }
}

export default Login;