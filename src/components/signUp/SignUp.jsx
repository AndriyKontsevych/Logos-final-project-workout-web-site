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
            correctFill: {
                firstName: false,
                secondName: false,
                mail: false,
                nickName: false,
                password: false
            }
        }
    }

    handleChange(e) {
        let numberOfCorrectFill = this.state.correctFill;

        function checket(name){
                const mail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
                const password = /^(?=.*[a-z])(?=.*[0-9])(?=.{8,16}$)/;
                const names = /^[A-Za-z]{3,12}$/;
                let checkedInput = name === "mail" ? mail : name === "password" ? password : names

                if(e.target.value.length === 0){
                    e.target.style.border = "none";
                } else if(numberOfCorrectFill[name]) {
                    e.target.style.border = "3px solid #28a745" ;
                    e.target.style.borderRadius = "5px"
                } else {
                    e.target.style.border = "3px solid #dc3545";
                    e.target.style.borderRadius = "5px"
                }

                if(checkedInput.test(e.target.value)){
                    numberOfCorrectFill[name] = true;
                } else {       
                    numberOfCorrectFill[name] = false;
                }
        }

        checket(e.target.name);

        let newUser = {...this.state.user};
        newUser[e.target.name] = e.target.value;

        this.setState({
            user: newUser,
            correctFill: numberOfCorrectFill
        })
    }

    addUserHandler(e){
        
        const user = this.state.user;
        const fill = this.state.correctFill;
        const userFill = Object.keys(this.state.user).filter( key => user[key].length !== 0 );
        const correctFillOfUser = Object.values(fill).filter(i => i);

        if(userFill.length === 5 && correctFillOfUser.length === 5){
            alertProps.text = "Congratulations now You can sign in and start workout";
            alertProps.success = true;
            instance.post("/users.json", {user})
                    .then( () =>{

                        this.props.openAlert();
                        this.handleReset(e, "reset")
                        alertProps.success = false;
                    })
                    .catch( err =>{
                        throw err
                    })
        } else {
            alertProps.text = "Some input has no fill or or filled incorrectly";
            this.props.openAlert();
        }
    }

    handleReset(e, text){
        let resetEvent = e.target.type;
        if(text === "reset"){
            resetEvent = "reset"
        }

        if(resetEvent === "reset"){
            const form  = e.target.parentElement.parentElement.children;
            for(let i = 0; i < form.length - 1; i++){
                form[i].style = "none";
            }
    
            this.setState({
                user: {
                    firstName: "",
                    secondName: "",
                    mail: "",
                    nickName: "",
                    password: ""
                },
                correctFill: {
                    firstName: false,
                    secondName: false,
                    mail: false,
                    nickName: false,
                    password: false
                }
            })
        }
    }

    render(){
        return(
            <div className="Sign">
                { this.props.alerts && <Alerts props={alertProps}/>}
                <button className="close-Form" onClick={()=>this.props.signUpOn()}>X</button>
                <form>
                    <input type="text" name="firstName" placeholder="First Name" required
                        onChange={(e)=>this.handleChange(e)} value={this.state.user.firstName}/>
                    <input type="text" name="secondName" placeholder="Last Name" required
                        onChange={(e)=>this.handleChange(e)} value={this.state.user.secondName}/>
                    <input type="email" name="mail" placeholder="Email address" required
                        onChange={(e)=>this.handleChange(e)} value={this.state.user.mail}/>
                    <input type="text" name="nickName" placeholder="Nickname" required
                        onChange={(e)=>this.handleChange(e)} value={this.state.user.nickName}/>
                    <input type="password" name="password" placeholder="Password" required
                        onChange={(e)=>this.handleChange(e)} value={this.state.user.password}/>
                    <div>
                        <button type="reset" onClick={(e)=> this.handleReset(e)}>Reset</button>
                        <button type="button" onClick={(e) => this.props.addUser(this.addUserHandler(e))}>Sign Up</button>
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