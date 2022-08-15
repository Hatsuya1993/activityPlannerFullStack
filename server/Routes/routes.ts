import express from 'express'
import { auth, deleteLocation, getLocations, postLocation } from '../Controller/locationController'

export const locationRoutes = express.Router()

locationRoutes.route("/locations").get(auth).get(getLocations)

locationRoutes.route("/newLocation").get(auth).post(auth, postLocation)

locationRoutes.route("/deleteLocation/:id").get(auth).delete(auth, deleteLocation)