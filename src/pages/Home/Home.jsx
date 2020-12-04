import React, { Component }  from 'react';
import { connect } from "react-redux";
import SignUp from '../../components/signUp/SignUp';
import SignIn from '../../components/singIn/SignIn';
import { SIGN_IN, SIGN_UP } from '../../store/types';

import "./style.scss"


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <div className="home">
                {!this.props.curentU &&
                    <div className="buttons">
                        { !this.props.signU && <button onClick={()=>this.props.signUpOn()} >Sign Up</button>}
                        { !this.props.signI && <button onClick={()=>this.props.signInOn()} >Sign In</button>}
                    </div>
                }
                {!this.props.curentU ? 
                    <div className="home-main">
                        { this.props.signU && <SignUp />}
                        { this.props.signI && <SignIn/> }
                    <div className="text">
                        THE BEST PROJECT 
                        YOU'LL EVER WORK ON
                        IS YOU
                    </div>
                </div> :
                <div className="home-user">
                    <div>{this.props.curentU.firstName}</div>
                </div>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signU: state.signUp,
        signI: state.signIn,
        curentU: state.curentUser
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        signUpOn: () => dispatch({type: SIGN_UP}),
        signInOn: () => dispatch({type: SIGN_IN}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);