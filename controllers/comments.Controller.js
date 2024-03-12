"use strict";

const Comments = require('../models/Comments');
const CommentsDB = require('../models/CommentsDB');

var commentsDB = new CommentDB();

function deleteComment(request, respond) {
    commentsDB.deleteComment(function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}
module.exports = {deleteComment}; 