import React, { Component } from 'react';
import { connect } from 'react-redux';
import instance from '../../instance';
import { CLOSE_SIGN_IN, ENTRANCE, GET_EXERCISE, OPEN_ALERT } from '../../store/types';
import Alerts from "../../context/alert/Alerts";

class SignIn extends Component{
    state = {
        user: {
            nickName: "",
            password: ""
        }
    }

    inputHandler(e){
        let newUser = {...this.state.user};
        newUser[e.target.name] = e.target.value;

        this.setState({
            user: newUser,
        })
    }

    entranceHandler(){
        
        instance.get("/users.json")
            .then( res => {

                let users = Object.values(res.data);

                for(let i = 0; i < users.length; i++){
                    if(users[i].user.nickName === this.state.user.nickName &&
                        users[i].user.password === this.state.user.password){
                            this.props.entrance(users[i].user);
                            this.props.signInOn();
                            
                        } else {
                            this.props.openAlert();
                        } 
                }
            })
            .catch( err => console.log(err))
    }

    render(){

        let alert = {
            text: "Incorrect nickname or password"
        }

        return(
            <div className="Sign">
                { this.props.alerts && <Alerts props={alert}/>}
                <button className="close-Form" onClick={()=>this.props.signInOn()}>X</button>
                <form>
                    <input type="text" name="nickName" placeholder="Nikname" onChange={(e)=> this.inputHandler(e)}/>
                    <input type="password" name="password" placeholder="Password" onChange={(e)=> this.inputHandler(e)}/>
                    <div>
                        <button type="reset">Reset</button>
                        <button type="button" onClick={() => this.entranceHandler()}>Sign In</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signI: state.signIn,
        alerts: state.alert,
        exersiceArr: state.exercise
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signInOn: () => dispatch({type: CLOSE_SIGN_IN}),
        entrance: (user) => dispatch({type: ENTRANCE, payload: user}),
        openAlert: () => dispatch({type: OPEN_ALERT}),
        getExercise: (arr) => dispatch({type: GET_EXERCISE, payload: arr})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);