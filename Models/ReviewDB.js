"use strict"
var db = require('../db-connection');
const Review = require('../Models/Review');

class ReviewDB {
    getAllReview(request, respond) {
        var sql = "SELECT * FROM restaurant_review.review";
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }
    getRestaurantReview(request, respond) {
        var restname = request.params.restname;
        var sql = "SELECT  user.username,comment.title,comment.comment_text FROM  (((review INNER JOIN comment ON review.commentid = comment.commentid) INNER JOIN user ON review.userid = user.userid)  INNER JOIN restaurant ON review.restid = restaurant.restid) WHERE restName = ?";
        db.query(sql, restname, function (error, msg) {
            if (error) {
                throw error;
                
            }
            else {
                respond.json(result);
               
                
            }
        });
    }

}
function prepareMessage(msg){
    var obj = {"message": msg};
    return obj;
}
module.exports = ReviewDB;