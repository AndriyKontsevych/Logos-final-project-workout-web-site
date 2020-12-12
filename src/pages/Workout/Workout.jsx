import React, { Component }  from 'react';
import {connect} from 'react-redux';
import { GET_EXERCISE, SIGN_UP } from '../../store/types';
import { Exercise } from '../../components/Exercise/Exercise';
import { Loader } from '../../context/loader/Loader';
import instance from '../../instance';
import './style.scss';

class Workout extends Component {
    state = {
        btn: true,
        day: "",
        loading: false
    }
    
    getApis (){
        const week = ["monday", "tuesday", "wednesday", "thorsday", "friday", "saturday", "sunday"];
        const restDays = [1,3,5,6];
        const currentDay = new Date().getDay();
        let day = ''; 
        if(!restDays.includes(currentDay)){ 
            day = week[currentDay - 1] 
        } else { day = "restday" };

        this.setState({loading: true})

        instance.get("/exercises.json").then( response => {
            
            const exerciseInfo = response.data[day];

            this.props.getExercise(exerciseInfo);
            setTimeout(() => {
                this.setState({loading: false})
            }, 2000);
        }).catch(function (error) {
            console.error(error);
        });

        this.setState({btn: false, day: day})
  }

  render(){     
      
      return(
        <div className="container pt-1">
              { this.props.userS ? 
              <div>
                <button onClick={() => this.getApis()} className="exercise-btn">
                    { this.state.btn ? "Get exercises for today" : `On ${this.state.day} you got to do:`}
                </button>             
                <div className="album py-5 bg-light">
                    {this.state.loading && <Loader />}
                    <Exercise props={this.props.exersiceArr} /> 
                </div>
              </div> 
              :
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
        exersiceArr: state.exercise
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUpOn: () => dispatch({type: SIGN_UP}),
        getExercise: (arr) => dispatch({type: GET_EXERCISE, payload: arr})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Workout);