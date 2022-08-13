import axios from "axios";
import {LocationInterface} from "../../../server/Interface/locationInterface"

export const getLocations = async () => {
    try {
        const data = await axios.get('http://localhost:8200/locations')
        return data.data
    } catch (error) {
        throw new Error(`${error}`)
    }

}

export const postLocation = async (info : LocationInterface) => {
    try {
        const data = await axios.post('http://localhost:8200/newLocation', {
            uid: info.uid,
            data_id: info.data_id,
            name: info.name,
            latitude: info.latitude,
            longitude: info.longitude
        })
        return data.data
    } catch (error) {
        throw new Error(`${error}`)
    }    
}

export const deleteLocation = async (id: string) => {
    try {
        await axios.delete(`http://localhost:8200/deleteLocation/${id}`)
    } catch (error) {
        throw new Error(`${error}`)
    }
}