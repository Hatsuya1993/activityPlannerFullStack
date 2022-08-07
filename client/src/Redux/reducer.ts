import { foodAndDrinksType, InitialState } from "./initialState";

interface ActionType {
    type: string
    foodAndDrinks: foodAndDrinksType
    loading: boolean
}

export const actionType = {
    SET_FOOD_AND_DRINKS : 'SET_FOOD_AND_DRINKS',
    SET_LOADING: 'SET_LOADING'
}

export const reducer = (state: InitialState, action: ActionType) => {
    switch(action.type) {
        case actionType.SET_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        case actionType.SET_FOOD_AND_DRINKS:
            return {
                ...state,
                foodAndDrinks: action.foodAndDrinks
            }
        default:
            return state
    }
}