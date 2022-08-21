import axios from "axios"

export const searchLocation = async (location: string) => {
    try {
        const data : any = await axios.get(`${process.env.REACT_APP_CORS}https://serpapi.com/search.json?q=${location}&api_key=${process.env.REACT_APP_GOOGLE_API}`, {
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
        const data : any = await axios.get(`${process.env.REACT_APP_CORS}https://serpapi.com/search.json?engine=google_maps&ll=@${latitude},${longitude},15.1z&type=search&api_key=${process.env.REACT_APP_GOOGLE_API}&q=${location}`, {
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
        const data : any = await axios.get(`${process.env.REACT_APP_CORS}https://serpapi.com/search.json?engine=google_maps_photos&data_id=${dataID}&api_key=${process.env.REACT_APP_GOOGLE_API}`, {
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

export const searchReviews = async (dataID : string) => {
    try {
        const data : any = await axios.get(`${process.env.REACT_APP_CORS}https://serpapi.com/search.json?engine=google_maps_reviews&data_id=${dataID}&api_key=${process.env.REACT_APP_GOOGLE_API}`, {
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