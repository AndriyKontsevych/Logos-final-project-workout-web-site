import React, { Component }  from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { Food } from '../../components/Food/Food';
import { GET_FOOD, GET_NUTRITION_SUM, SIGN_UP } from '../../store/types';
import "./style.scss";
import { Loader } from '../../context/loader/Loader';

class Diet extends Component {
    state = {
        loading: false
    }

    getApis(){
        let arrFood = [];
        let randomArrFood = [];
        this.setState({loading: true});

          axios.get("https://wger.de/api/v2/ingredientinfo/").then( response => {

              const foods = response.data.results;
              const sumnutrition = {
                carbohydrates: 0,
                fat: 0,
                protein: 0,
                energy: 0
              }

              for(let i = 0; i < foods.length; i++){
                  let randomFood = Math.round(Math.random() * foods.length - 1);
                  
                  if(arrFood.length < 4){
                      if(randomFood >= 0) {
                          if(!randomArrFood.includes(randomFood)){
                            arrFood.push(foods[randomFood]);  
                            randomArrFood.push(randomFood); 
                            for(let nutr in sumnutrition){
                                sumnutrition[nutr] += parseFloat(foods[randomFood][nutr]);
                            }
                          }
                      }
                  }
              }

              this.props.getNutritionSum(sumnutrition)
              this.props.getFood(arrFood);
              setTimeout(() => {
                this.setState({loading: false})
            }, 2000);
          }).catch(function (error) {
              console.error(error);
          });
    }

    render(){     
        return(
            <div className="container pt-1">
                { this.props.userS ? 
                <div>
                    <button onClick={()=> this.getApis()} className="food-btn ">Get meals</button>
                    <div className="album py-5 bg-light">
                        {this.state.loading && <Loader />}
                            {this.props.foods.map(food => (
                                <Food props={food} key={food.id}/>
                            ))}
                            <div className="card mb-3 my-1 energy-sum" style={{maxWidth: "100%"}}>
                                <div className="row g-0">
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <div>
                                                Total composition per day:
                                            </div>
                                            <ul>
                                                <li>Carbohydrates: {(this.props.nutrSun.carbohydrates).toFixed(3)}</li>
                                                <li>Fat: {(this.props.nutrSun.fat).toFixed(3)}</li>
                                                <li>Protein: {(this.props.nutrSun.protein).toFixed(3)}</li>
                                                <li>Energy: {(this.props.nutrSun.energy).toFixed(3)}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
        foods: state.food,
        nutrSun: state.nutritionSum
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUpOn: () => dispatch({type: SIGN_UP}),
        getFood: (arr) => dispatch({type: GET_FOOD, payload: arr}),
        getNutritionSum: (obj) => dispatch({type: GET_NUTRITION_SUM, payload: obj})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Diet);