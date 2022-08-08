import { foodAndDrinksData } from "../Utils/Data"

export interface coordinatesType {
    latitude: number,
    longitude: number
}

export interface locationType {
    address1: string,
    address2: string,
    address3: string,
    city: string,
    zip_code: string,
    country: string,
    state: string
}

export interface yelpResponseType {
    id: string,
    name: string,
    image_url: string,
    is_closed: boolean,
    review_count: number,
    rating: number,
    coordinates: coordinatesType,
    location: locationType,
    phone: string,
    display_phone: string
}

export interface InitialState {
    currentPlan: Array<yelpResponseType>,
    foodAndDrinks : Array<yelpResponseType>,
    loading: boolean,
    hotels: Array<yelpResponseType>,
    activities: Array<yelpResponseType>,
    events: Array<yelpResponseType>
    service: string,
    setDropDown: {
        data: Array<string>
        service: string
    }
}

export const initialState : InitialState = {
    currentPlan: [],
    foodAndDrinks: [],
    loading: false,
    events: [],
    hotels: [],
    activities: [],
    service: '',
    setDropDown: {
        data: foodAndDrinksData,
        service: 'food' 
    }
}