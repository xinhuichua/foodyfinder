"use strict"
var db = require('../db-connection');
const Comment = require('../Models/Comment');

class CommentsDB {
    getAllComments(request, respond) {
        var sql = "SELECT * FROM restaurant_review.comment";
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }
    addComment(request, respond) {
        //var now = new Date();
        msg = "";
        var commentObject = new Comment(null,request.body.restid, request.body.userid,request.body.username,request.body.title,request.body.comment_text, request.body.rating);
        var sql = "INSERT INTO restaurant_review.comment (restid,userid,username,title,comment_text,rating) VALUES(?,?,?,?,?,?)";

        var values = [commentObject.getRestId(),commentObject.getUserId(),commentObject.getUserName(),commentObject.getTitle(), commentObject.getComment(), commentObject.getRating()];

        db.query(sql, values, function (error, msg) {
            if (error) {
                throw error;
               
            }
            else {
                //respond.json(result);
                msg = "Added comment Successfully!"
                respond.json(prepareMessage(msg));
            }


        });


    }
    updateComment(request, respond) {
        

        var commentObject = new Comment(request.params.commentid, request.body.restid,request.body.userid,request.body.username,request.body.title,request.body.comment_text, request.body.rating);

        var sql = "UPDATE restaurant_review.comment SET title = ? ,comment_text = ?, rating = ? WHERE commentid = ?";
        var values = [commentObject.getTitle(),commentObject.getComment(), commentObject.getRating(), commentObject.getCommentId()];
        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
                msg = "Update comment Successfully!"
                respond.json(prepareMessage(msg));
            }
        });



    }
    deleteComment(request, respond) {
        var commentID = request.params.commentid;
        var sql = "DELETE FROM restaurant_review.comment WHERE commentid = ?";
        db.query(sql, commentID, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result,msg);
                msg = "Delete comment Successfully!"
                respond.json(prepareMessage(msg));
            }
        });
    }
    
}
function prepareMessage(msg){
    var obj = {"message": msg};
    return obj;
}
module.exports = CommentsDB;