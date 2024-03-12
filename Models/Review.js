"use strict";
class Review{
    constructor(reviewid,commentid, restid,userid, datePosted) {
        this.reviewid = reviewid;
        this.commentid = commentid;
        this.restid = restid;
        this.userid = userid;
        this.datePosted = datePosted;

    }
    getReviewId() {
        return this.reviewid;
    }
    getCommentId() {
        return this.commentid;
    }
    getRestId() {
        return this.restid;
    }
    getUserId() {
        return this.userid;
    }
    getUserId() {
        return this.userid;
    }
    getDatePosted() {
        return this.datePosted;
    }
}
module.exports = Review;