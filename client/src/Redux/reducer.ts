import { yelpResponseType, InitialState } from "./initialState";

interface ActionType {
    type: string
    currentPlan: yelpResponseType
    foodAndDrinks: yelpResponseType
    loading: boolean,
    events: yelpResponseType,
    hotels: yelpResponseType,
    activities: yelpResponseType,
    setDropDown: {
        data: Array<string>,
        service: string
    }
}

export const actionType = {
    SET_FOOD_AND_DRINKS : 'SET_FOOD_AND_DRINKS',
    SET_LOADING: 'SET_LOADING',
    SET_HOTELS: 'SET_HOTELS',
    SET_ACTIVITIES: 'SET_ACTIVITIES',
    SET_DROPDOWN: 'SET_DROPDOWN',
    SET_CURRENT_PLAN: 'SET_CURRENT_PLAN',
    SET_EVENTS: 'SET_EVENTS'
}

export const reducer = (state: InitialState, action: ActionType) => {
    switch(action.type) {
    case actionType.SET_CURRENT_PLAN:
        return {
            ...state,
            currentPlan: action.currentPlan
        }
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
        case actionType.SET_HOTELS:
            return {
                ...state,
                hotels: action.hotels
            }
        case actionType.SET_ACTIVITIES:
            return {
                ...state,
                activities: action.activities
            }
        case actionType.SET_EVENTS:
            return {
                ...state,
                activities: action.activities
            }
        case actionType.SET_DROPDOWN:
            return {
                ...state,
                setDropDown: {
                    data: action.setDropDown.data,
                    service: action.setDropDown.service
                }
            }
        default:
            return state
    }
}