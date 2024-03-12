"use strict";
class Comment {
constructor(commentid,restid,userid,username,title,comment_text,rating) {
this.commentid = commentid;
this.restid = restid;
this.userid = userid;
this.username = username;
this.title = title;
this.comment_text = comment_text;
this.rating = rating;
//this.datePosted = datePosted;
}
getCommentId() {
    return this.commentid;
}
getRestId() {
    return this.restid;
}

getUserId(){
    return this.userid;
}
getUserName(){
    return this.username
}
getTitle(){
    return this.title;
}
getComment() {
    return this.comment_text;
}
getRating() {
    return this.rating;
}
/*getDatePosted() {
    return this.datePosted;
}
setMovieId(movieId) {
    this.movieId = movieId;
}
setMovie(movie) {
    this.movie = movie;
}
setReview(review) {
    this.review = review;
}
setUsername(username) {
    this.username = username;
}
setRating(rating) {
    this.rating = rating;
}
setDatePosted(datePosted) {
    this.datePosted = datePosted;
}*/
}
module.exports = Comment;
