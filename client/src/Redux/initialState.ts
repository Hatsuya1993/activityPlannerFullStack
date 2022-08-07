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

export interface foodAndDrinksType {
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
    foodAndDrinks : Array<foodAndDrinksType>,
    loading: boolean,
}

export const initialState : InitialState = {
    foodAndDrinks: [],
    loading: false,
}