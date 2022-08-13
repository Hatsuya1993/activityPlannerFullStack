import { yelpResponseType, InitialState, googleSearchResponse, searchMetaDataResponse, googleSearchReviewsResponse, myPlanDataType } from "./initialState";

interface ActionType {
    myPlanData: Array<myPlanDataType>,
    type: string,
    googleSearchReviews: googleSearchReviewsResponse,
    currentPlan: yelpResponseType
    foodAndDrinks: yelpResponseType
    googleSearchResponseData: googleSearchResponse,
    googleSearchMap: searchMetaDataResponse,
    loading: boolean,
    events: yelpResponseType,
    hotels: yelpResponseType,
    activities: yelpResponseType,
    detailSelected: yelpResponseType,
    setDropDown: {
        data: Array<string>,
        service: string
    }
}

export const actionType = {
    SET_MY_PLAN_DATA: 'SET_MY_PLAN_DATA',
    SET_SEARCH_REVIEWS: 'SET_SEARCH_REVIEWS',
    SET_SEARCH_METADATA: 'SET_SEARCH_METADATA',
    SET_OPENING_HOURS: 'SET_OPENING_HOURS',
    SET_DETAIL_PAGE : 'SET_DETAIL_PAGE',
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
        case actionType.SET_DETAIL_PAGE:
            return {
                ...state,
                detailSelected: action.detailSelected
            }
        case actionType.SET_OPENING_HOURS:
            return {
                ...state,
                googleSearchResponseData: action.googleSearchResponseData
            }
        case actionType.SET_SEARCH_METADATA:
            return {
                ...state,
                googleSearchMap: action.googleSearchMap
            }
        case actionType.SET_SEARCH_REVIEWS:
            return {
                ...state,
                googleSearchReviews: action.googleSearchReviews
            }
        case actionType.SET_MY_PLAN_DATA:
            return {
                ...state,
                myPlanData: action.myPlanData
            }
        default:
            return state
    }
}