import React, { Component } from 'react';
import { connect } from 'react-redux';
import Alerts from "../../context/alert/Alerts"
import instance from '../../instance';
import { ADD_USER, CLOSE_SIGN_UP, OPEN_ALERT } from '../../store/types';

let alertProps = {
    text: "",
    success: false
};

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: {
                firstName: "",
                secondName: "",
                mail: "",
                nickName: "",
                password: ""
            },
        }
    }

    handleChange(e) {
        let newUser = {...this.state.user};
        newUser[e.target.name] = e.target.value;

        this.setState({
            user: newUser,
        })
    }

    addUserHandler(){
        const user = this.state.user

        let userFill = Object.keys(user).filter( key => user[key].length !== 0 );

        if(userFill.length === 5){
            alertProps.text = "Congratulations now You can sign in and start workout";
            alertProps.success = true;
            instance
                .post("/users.json", {user})
                    .then( () =>{

                        this.props.openAlert();
                        let objUser = this.state.user;
                        for(let key in objUser){
                            objUser[key] = "";
                        }
 
                        this.setState({user: objUser});
                        alertProps.success = false;
                    })
                    .catch( err =>{
                        throw err
                    })
        } else {
            alertProps.text = "Some input has no fill";
            this.props.openAlert();
        }
    }

    render(){
        return(
            <div className="Sign">
                { this.props.alerts && <Alerts props={alertProps}/>}
                <button className="close-Form" onClick={()=>this.props.signUpOn()}>X</button>
                <form>
                    <input type="text" name="firstName" placeholder="First Name" 
                        onChange={(e)=>this.handleChange(e)} value={this.state.user.firstName}/>
                    <input type="text" name="secondName" placeholder="Last Name" 
                        onChange={(e)=>this.handleChange(e)} value={this.state.user.secondName}/>
                    <input type="email" name="mail" placeholder="Email address" 
                        onChange={(e)=>this.handleChange(e)} value={this.state.user.mail}/>
                    <input type="text" name="nickName" placeholder="Nickname" 
                        onChange={(e)=>this.handleChange(e)} value={this.state.user.nickName}/>
                    <input type="password" name="password" placeholder="Password" 
                        onChange={(e)=>this.handleChange(e)} value={this.state.user.password}/>
                    <div>
                        <button type="reset">Reset</button>
                        <button type="button" onClick={() => this.props.addUser(this.addUserHandler())}>Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signU: state.signUp,
        alerts: state.alert
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUpOn: () => dispatch({type: CLOSE_SIGN_UP}),
        addUser: () => dispatch({type: ADD_USER}),
        openAlert: () => dispatch({type: OPEN_ALERT}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);