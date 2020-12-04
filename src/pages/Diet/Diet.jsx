import React, { Component }  from 'react';
import {connect} from 'react-redux';

class Diet extends Component {

    render(){     
        return(
            <div>
                { this.props.userS ? 
                <div>
                    Welcome, the diet programs in development
                </div> :
                <div>
                    You are guest, please sign in or sign up if you are first on this website
                </div>
            }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userS: state.curentUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUpOn: () => dispatch({type: "SIGN_UP"}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Diet);