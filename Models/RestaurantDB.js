"use strict";

//This if to get the connection to the database 
var db = require('../db-connection'); //reference of db-connection.js
const Restaurant = require('../Models/Restaurant');

class RestaurantDB {
    getAllRestaurants(request, respond) {
        var sql = "SELECT * FROM restaurant_review.restaurant";
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }

    searchRestaurant(request, respond) {
        var restname = request.params.restname;
        var sql = "SELECT * FROM restaurant_review.restaurant WHERE restName = ?";
        
        db.query(sql, restname, function (error) {
            if (error) {

                throw error;

            }
            else {
                //respond.json(result);
                msg = "Restaurant is found";
                console.log(msg);
                respond.json(prepareMessage(msg));
            }
        });
    }


}
    function prepareMessage(msg){
        var obj = {"message": msg};
        return obj;
    
    
}
    

module.exports = RestaurantDB;