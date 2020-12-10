import { CLOSE_ALERT, CLOSE_SIGN_IN, CLOSE_SIGN_UP, ENTRANCE, GET_EXERCISE, GET_FOOD, GET_NUTRITION_SUM, OPEN_ALERT, SIGN_IN, SIGN_UP } from "../types"

const initialState = {
    signUp : false,
    signIn : false,
    curentUser: false,
    successRegistration: false,
    alert: false ,
    exercise: [],
    food: [],
    nutritionSum: {}
}

export const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case SIGN_UP : 
        return {
            ...state,
            signUp: !state.signUp,
            signIn: !state.signUp ? false : true 
        }
        case CLOSE_SIGN_UP : 
        return {
            ...state,
            signUp: !state.signUp, 
        }
        case SIGN_IN : 
        return {
            ...state,
            signIn: !state.signIn,
            signUp: !state.signIn ? false : true 
        }
        case CLOSE_SIGN_IN : 
        return {
            ...state,
            signIn: !state.signIn,
        }
        case CLOSE_ALERT :
            return {
                ...state,
                alert: false
            }
        case OPEN_ALERT :
            return {
                ...state,
                alert: true
            }
        case ENTRANCE :
            return {
                ...state,
                curentUser: action.payload
            }  
        case GET_EXERCISE : 
            return {
                ...state,
                exercise: action.payload
            }
        case GET_FOOD :
            return {
                ...state,
                food: action.payload
            }
        case GET_NUTRITION_SUM :
            return {
                ...state,
                nutritionSum: action.payload
            }

        default : 
            return {
            ...state
        }
    }
}