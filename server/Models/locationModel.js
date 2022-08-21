"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
var mongoose_1 = require("mongoose");
var locationSchema = new mongoose_1.Schema({
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
    },
    yelpData: {
        type: Object,
        required: true
    }
});
exports.Location = mongoose_1.model('Location', locationSchema);
