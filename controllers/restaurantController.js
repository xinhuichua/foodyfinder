"use strict";

//const Restaurant = require('../models/Restaurant');
const RestaurantDB = require('../Models/RestaurantDB');

var restaurantDB = new RestaurantDB();

function getAllRestaurants(request, respond) {
    //Call the getAllRestaurants() function in the RestaurantDB class.
    restaurantDB.getAllRestaurants(function(error, result) {
        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}
function searchRestaurant(request, respond) {
    //Call the searchRestaurant() function in the RestaurantDB class.
    restaurantDB.searchRestaurant(function(error, result) {
        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}


module.exports = {getAllRestaurants,searchRestaurant};