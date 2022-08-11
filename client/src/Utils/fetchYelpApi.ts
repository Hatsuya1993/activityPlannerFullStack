import axios from "axios"
import {AUTHORIZATION, CORS} from "../secret"

let lat : number
let long : number

export const getLocationPromise = new Promise((resolve, reject) => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position : GeolocationPosition) => {
            resolve({
                latitude : position.coords.latitude,
                longitude : position.coords.longitude
            })
        })
    }
    else{
        reject("Geolocation is not supported")
    }
})

export const getAllFoodAndDrinks = async (radius = 100, categories = 'any', latitude = 0, longitude = 0) => {
    if(latitude === 0 && longitude === 0){
        try {
            let data : any = await getLocationPromise
            lat = data.latitude
            long = data.longitude
        } catch (error) {
            console.log(error)
        }
    }
    try {
        const data = await axios.get(`${CORS}https://api.yelp.com/v3/businesses/search?term=food&latitude=${lat}&longitude=${long}${radius === 400 ? '' : `&radius=${radius}`}${categories === 'any' ? '' : `&categories=${categories}`}`, {
            headers: {
                "Authorization": AUTHORIZATION,
                "accept": "application/json",
                "x-requested-with": "xmlhttprequest",
                "Access-Control-Allow-Origin": "*",
            }   
        })
        return data.data.businesses
    } catch (error) {
    console.log(error)
    }
}

export const getAllHotels = async (radius = 100, latitude = 0, longitude = 0) => {
    if(latitude === 0 && longitude === 0){
        try {
            let data : any = await getLocationPromise
            lat = data.latitude
            long = data.longitude
        } catch (error) {
            console.log(error)
        }
    }
    try {
        const data = await axios.get(`${CORS}https://api.yelp.com/v3/businesses/search?term=hotels&latitude=${lat}&longitude=${long}${radius === 400 ? '' : `&radius=${radius}`}`, {
            headers: {
                "Authorization": AUTHORIZATION,
                "accept": "application/json",
                "x-requested-with": "xmlhttprequest",
                "Access-Control-Allow-Origin": "*",
            }   
        })    
        return data.data.businesses
    } catch (error) {
    console.log(error)
    }
}

export const getAllActivities = async (radius = 100, categories = 'any', latitude = 0, longitude = 0) => {
    if(latitude === 0 && longitude === 0){
        try {
            let data : any = await getLocationPromise
            lat = data.latitude
            long = data.longitude
        } catch (error) {
            console.log(error)
        }
    }
    try {
        const data = await axios.get(`${CORS}https://api.yelp.com/v3/businesses/search?term=activities&latitude=${lat}&longitude=${long}${radius === 400 ? '' : `&radius=${radius}`}${categories === 'any' ? '' : `&categories=${categories}`}`, {
            headers: {
                "Authorization": AUTHORIZATION,
                "accept": "application/json",
                "x-requested-with": "xmlhttprequest",
                "Access-Control-Allow-Origin": "*",
            }   
        })    
        return data.data.businesses
    } catch (error) {
    console.log(error)
    }
}

export const getAllEvents = async (radius = 100, latitude = 0, longitude = 0) => {
    if(latitude === 0 && longitude === 0){
        try {
            let data : any = await getLocationPromise
            lat = data.latitude
            long = data.longitude
        } catch (error) {
            console.log(error)
        }
    }
    try {
        const data = await axios.get(`${CORS}https://api.yelp.com/v3/businesses/search?term=events&latitude=${lat}&longitude=${long}${radius === 400 ? '' : `&radius=${radius}`}`, {
            headers: {
                "Authorization": AUTHORIZATION,
                "accept": "application/json",
                "x-requested-with": "xmlhttprequest",
                "Access-Control-Allow-Origin": "*",
            }   
        })    
        return data.data.businesses
    } catch (error) {
    console.log(error)
    }
}