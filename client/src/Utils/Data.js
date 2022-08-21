"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activityData = exports.foodAndDrinksData = exports.activity = void 0;
var io5_1 = require("react-icons/io5");
var fa_1 = require("react-icons/fa");
var md_1 = require("react-icons/md");
var tb_1 = require("react-icons/tb");
exports.activity = [
    {
        id: 1,
        type: 'Food & Drinks',
        symbol: io5_1.IoFastFoodSharp
    },
    {
        id: 2,
        type: 'Hotels',
        symbol: fa_1.FaHotel
    },
    {
        id: 3,
        type: 'Activities',
        symbol: md_1.MdSportsHandball
    },
    {
        id: 4,
        type: 'Events',
        symbol: tb_1.TbChristmasTree
    },
];
exports.foodAndDrinksData = ['Select food type', 'singaporean', 'italian', 'french', 'chinese', 'vietnamese', 'any'];
exports.activityData = ['Select activity type', 'sports', 'games', 'nature', 'workshop', 'any'];
