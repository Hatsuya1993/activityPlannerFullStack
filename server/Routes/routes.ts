import express from 'express'
import { getLocations, postLocation } from '../Controller/locationController'

export const locationRoutes = express.Router()

locationRoutes.route("/locations").get(getLocations)

locationRoutes.route("/newLocation").post(postLocation)