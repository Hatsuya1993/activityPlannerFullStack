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

export const deleteLocation = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        await Location.findOneAndDelete({data_id: id})
        res.json({
            message: `Deleted location ${id} successfully`
        })
    } catch (error) {
        res.status(400).json({
            "Response": res.statusCode,
            "Error message": error
        })
    }
}