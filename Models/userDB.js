"use strict";
var db = require('../db-connection');
const User = require('../Models/users');

class userDB{
    
    getLoginCredentials(request, respond){
       var username = request.body.username;
       var password = request.body.password;
       var msg = "";

       var sql = "SELECT password FROM user WHERE username = ?";

        db.query(sql, [username], function (error, result) {
            if(error){
                throw error;
            }
            else{
                if(result.length > 0){
                    if(password == result[0].password){
                        msg = "SUCCESS!";
                        console.log(msg);
                    }
                    else{
                        msg = "FAIL!";
                        console.log(msg);
                    }
                }
                else{
                    msg = "USER NOT FOUND!";
                        console.log(msg);
                }
                respond.json(prepareMessage(msg));
            }
          });
    }
    addNewUser(request, respond) {
       var msg = "";
        var userObject = new User(null, request.body.username, request.body.first_name, request.body.last_name, request.body.email, request.body.birthday,request.body.address,request.body.gender,request.body.phoneNumber,request.body.password);
        var sql = "INSERT INTO restaurant_review.user (username, first_name, last_name, email, birthday,address, gender, phoneNumber, password) VALUES(?,?,?,?,?,?,?,?,?)";

        var values = [userObject.getUserName(), userObject.getFirstName(), userObject.getLastName(),userObject.getEmail(), userObject.getBirthday(),userObject.getAddress(), userObject.getGender(),userObject.getPhoneNumber(),userObject.getPassword()];

        db.query(sql, values, function (error, msg) {
            if (error) {
                throw error;
            }
            else {
               // respond.json(result);
                msg = "REGISTERED SUCCESSFULLY"
                respond.json(prepareMessage(msg));
            }


        });


    }

    getAllUsers(request, respond){
        var sql = "SELECT * FROM restaurant_review.user";
        db.query(sql, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }

    updateFirstName(request, respond){
       
        var userObject = new User(request.params.userid,null, request.body.first_name,null,null,null,null,null,null,null);
        var sql = "UPDATE restaurant_review.user SET first_name = ? WHERE userid = ?";
        var values = [userObject.getFirstName(), userObject.getUserId()];
        var msg = "";

        db.query(sql, values, function (error, result) {
            if(error){
                
                throw error;
            }
            else{
                msg = "Updated Successfully!";
                        console.log(msg);
                  // respond.json(result);
                  respond.json(prepareMessage(msg));
            }
          });
    }
    deleteUser(request, respond) {
       var ID = request.params.userid;
        var sql = "DELETE FROM restaurant_review.user WHERE userid = ?";
        var msg = "";

        db.query(sql, ID, function (error, msg) {
            if (error,msg) {
                respond.json(prepareMessage(msg));
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
function prepareMessage(msg){
    var obj = {"message": msg};
    return obj;
}

module.exports = userDB;