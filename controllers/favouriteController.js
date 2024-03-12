"use strict";

const FavouriteDB = require('../Models/FavouriteDB');

var favouriteDB = new FavouriteDB();

function getAllFavourite(request, respond) {
    //Call the getAllFavourite() function in the FavouriteDB class.

    favouriteDB.getAllFavourite(function(error, result) {
        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });

}

function addRestaurant(request, respond) {
    //call addRestaurant() function in the FavouriteDB class.
    var favourite = new Favourite(null, request.body.restid, request.body.userid,null);

    favouriteDB.addRestaurant(favourite,function(error, result) {
        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}
function deleteFavourite(request, respond) {
    //Call the deleteFavourite() function in the favouriteDB class.
    favouriteDB.deleteFavourite(function(error, result) {
        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}
module.exports = { getAllFavourite,addRestaurant,deleteFavourite };