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

export interface openingHours {
    opens: string,
    closes: string
}

export interface knowledge_graph {
    hours: openingHours
}

export interface googleSearchResponse {
    knowledge_graph: knowledge_graph
}

export interface searchMetaDataResponse {
    google_maps_url: string 
}

export interface localResults {
    data_id: string
}

export interface imagesResponse {
    thumbnail: string
}

export interface placeResults {
    images: Array<imagesResponse>
}

export interface googleSearchMapResponse {
    search_metadata: searchMetaDataResponse
    local_results: Array<localResults>
    place_results: placeResults
}

export interface InitialState {
    googleSearchMap: Array<googleSearchMapResponse>
    googleSearchKnowledgeGraph: Array<googleSearchResponse>
    detailSelected: Array<yelpResponseType>,
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
    googleSearchMap: [],
    googleSearchKnowledgeGraph: [],
    detailSelected: [],
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