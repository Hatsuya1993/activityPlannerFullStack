"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationRoutes = void 0;
var express_1 = __importDefault(require("express"));
var locationController_1 = require("../Controller/locationController");
exports.locationRoutes = express_1.default.Router();
exports.locationRoutes.route("/locations").get(locationController_1.auth).get(locationController_1.getLocations);
exports.locationRoutes.route("/newLocation").get(locationController_1.auth).post(locationController_1.auth, locationController_1.postLocation);
exports.locationRoutes.route("/deleteLocation/:id").get(locationController_1.auth).delete(locationController_1.auth, locationController_1.deleteLocation);
