import axios from "axios"
import {AUTHORIZATION, CORS} from "../secret"

let latitude = 0
let longitude = 0

const getLocation = () => {
    navigator.geolocation.getCurrentPosition(showPosition)
}

const showPosition = (position: GeolocationPosition) => {
    latitude = position.coords.latitude
    longitude = position.coords.longitude
}

export const getAllFoodAndDrinks = async (radius = 100) => {
    getLocation()
    const data = await axios.get(`${CORS}https://api.yelp.com/v3/businesses/search?term=food&latitude=${latitude}&longitude=${longitude}&radius=${radius}`, {
        headers: {
            "Authorization": AUTHORIZATION,
            "accept": "application/json",
            "x-requested-with": "xmlhttprequest",
            "Access-Control-Allow-Origin": "*",
        }   
    })
    return data.data.businesses
}