import React, { Component }  from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Diet extends Component {

    getApis(){
        const options = {
            method: 'GET',
            url: 'https://gabamnml-health-v1.p.rapidapi.com/bmi',
            Authorization: "acfe92cc15171f126780637e618d6346dddf3948"
            }
          
          axios.request(options).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });
    }

    render(){     
        return(
            <div>
                { this.props.userS ? 
                <div>
                    Welcome, the diet programs in development
                    <button onClick={()=> this.getApis()}>get</button>
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