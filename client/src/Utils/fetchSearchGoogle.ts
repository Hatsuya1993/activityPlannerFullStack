import axios from "axios"
import { CORS, GOOGLE_API } from "../secret"

export const searchLocation = async (location: string) => {
    try {
        const data : any = await axios.get(`${CORS}https://serpapi.com/search.json?q=${location}&api_key=${GOOGLE_API}`, {
            headers: {
                "accept": "application/json",
                "x-requested-with": "xmlhttprequest",
                "Access-Control-Allow-Origin": "*",
            }
        })
        return data.data
    } catch (error) {
        console.log(error)
    }
}

export const searchByMap = async (location: string, latitude: number, longitude: number) => {
    try {
        const data : any = await axios.get(`${CORS}https://serpapi.com/search.json?engine=google_maps&ll=@${latitude},${longitude},15.1z&type=search&api_key=${GOOGLE_API}&q=${location}`, {
            headers: {
                "accept": "application/json",
                "x-requested-with": "xmlhttprequest",
                "Access-Control-Allow-Origin": "*",
            }
        })
        return data.data
    } catch (error) {
        console.log(error)
    }
}

export const searchByMapPhotos = async (dataID: string) => {
    try {
        const data : any = await axios.get(`${CORS}https://serpapi.com/search.json?engine=google_maps_photos&data_id=${dataID}&api_key=${GOOGLE_API}`, {
            headers: {
                "accept": "application/json",
                "x-requested-with": "xmlhttprequest",
                "Access-Control-Allow-Origin": "*",
            }
        })
        return data.data
    } catch (error) {
        console.log(error)
    }
}