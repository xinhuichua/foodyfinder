"use strict";

//This if to get the connection to the database 
var db = require('../db-connection'); //reference of db-connection.js
const Favourite = require('../Models/Favourite');

class FavouriteDB {
    getAllFavourite(request, respond) {
        var username = request.params.username;
        var sql = "SELECT favourite.favouriteid, restaurant.restName, user.username FROM  ((favourite INNER JOIN restaurant ON favourite.restid = restaurant.restid) INNER JOIN user ON favourite.userid = user.userid) WHERE username = ?";
        db.query(sql, username, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }

    addRestaurant(request, respond) {
        //var now = new Date();
        var favouriteObject = new Favourite(null, null, request.body.restName, request.body.userid);
        var sql = "INSERT INTO restaurant_review.favourite (restName,userid) VALUES(?,?)";

        var values = [favouriteObject.getRestName(), favouriteObject.getId(), favouriteObject.getUserId(),];

        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }

    deleteFavourite(request, respond) {
        var favouriteID = request.params.favouriteid;
        var sql = "DELETE FROM restaurant_review.favourite WHERE favouriteid = ?";
        var msg = "";

        db.query(sql, favouriteID, function (error, result) {
            if (error) {

                throw error;
            }
            else {
                msg = "Deleted Successfully!";
                console.log(msg);
                respond.json(prepareMessage(msg));
                //respond.json(result);
            }
        });
    }
}

module.exports = FavouriteDB;