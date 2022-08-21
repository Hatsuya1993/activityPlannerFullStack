"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialState = void 0;
var Data_1 = require("../Utils/Data");
exports.initialState = {
    myPlanData: [],
    googleSearchReviews: {
        reviews: []
    },
    googleSearchMap: [],
    googleSearchKnowledgeGraph: [],
    detailSelected: [],
    currentPlan: [],
    foodAndDrinks: [],
    loading: false,
    events: [],
    hotels: [],
    activities: [],
    service: '',
    setDropDown: {
        data: Data_1.foodAndDrinksData,
        service: 'food'
    }
};
