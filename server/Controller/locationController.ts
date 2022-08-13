import {Request,Response} from 'express'
import {Error} from 'mongoose'
import { LocationInterface } from '../Interface/locationInterface'
import { Location } from '../Models/locationModel'

export const getLocations = async (req: Request, res: Response) => {
    Location.find({}, (err: Error, result: Array<LocationInterface>) => {
        if(err){
            res.json({
                "Response": res.statusCode,
                "Error message": err
            })
        }
        else{
            res.json({
                data: result
            })
        }
    }) 
}

export const postLocation = async (req: Request, res: Response) => {
    const locationBody = req.body
    try {
        const newLocation = new Location(locationBody)
        await newLocation.save()
        res.status(200).json({
            data: newLocation
        })
    } catch (error) {
        res.status(400).json({
            "Response": res.statusCode,
            "Error message": error
        })
    }
}