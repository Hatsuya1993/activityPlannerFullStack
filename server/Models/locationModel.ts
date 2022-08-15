import {Schema, model} from 'mongoose'
import {LocationInterface} from '../Interface/locationInterface'

const locationSchema = new Schema<LocationInterface>({
    uid: {
        type: String,
        required: true,
    },
    data_id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }
})

export const Location = model<LocationInterface>('Location', locationSchema)