import axios from "axios";
import {LocationInterface} from "../../../server/Interface/locationInterface"

export const getLocations = async (userToken: string) => {
    try {
        const data = await axios.get(`${process.env.REACT_APP_HEROKU_SERVER || 'http://localhost:8200/'}locations`, {
            withCredentials: true,
            headers: {
                "token": userToken
            }
        })
        return data.data
    } catch (error) {
        throw new Error(`${error}`)
    }

}

export const postLocation = async (info : LocationInterface, userToken: string) => {
    try {
        const data = await axios.post(`${process.env.REACT_APP_HEROKU_SERVER || 'http://localhost:8200/'}newLocation`, {
            uid: info.uid,
            data_id: info.data_id,
            name: info.name,
            latitude: info.latitude,
            longitude: info.longitude,
            yelpData: info.yelpData
        }, {
            withCredentials: true,
            headers: {
                "token": userToken
            }
        })
        return data.data
    } catch (error) {
        throw new Error(`${error}`)
    }    
}

export const deleteLocation = async (id: string, userToken: string) => {
    try {
        await axios.delete(`${process.env.REACT_APP_HEROKU_SERVER || 'http://localhost:8200/'}deleteLocation/${id}`, {
            withCredentials: true,
            headers: {
                "token": userToken
            }
        })
    } catch (error) {
        throw new Error(`${error}`)
    }
}