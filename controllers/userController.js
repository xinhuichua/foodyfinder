"use strict";

const User = require('../models/Users');
const UserDB = require('../models/UserDB');

var userDB = new UserDB();

function searchUser(request, respond) {
    var username = request.params.username;

}

// This function authenticates by comparing the input password and password 
// from the database.
function authenticate(request, respond) {
    var input_username = request.body.username; // username from user input
    var input_password = request.body.password; // password from user input
    var msg = "";

    // Call the getLoginCredentials function from UserDB
    userDB.getLoginCredentials(input_username, function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            // If user can be found, result has one record
            if (result.length > 0) {
                if (input_password == result[0].password) {
                    msg = "1"; // "Success!";
                    console.log(msg);
                } else {
                    msg = "Login Fail!";
                    console.log(msg);
                }
            } else { // If user not found, result has no record
                msg = "User not found!";
            }

            respond.json(prepareMessage(msg));
        }
    });
}

// This function authenticates by using the database to look for 
// the requested username and password.
function authenticateByDB(request, respond) {
    var input_username = request.body.username;
    var input_password = request.body.password;
    var msg = "";

    userDB.authenticateByDB(request.body.username, request.body.password, function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            // If the record can be found, the result will have one item
            // else it will have no item.
            if (result.length > 0) {
                msg = "Success!";
            } else {
                msg = "Fail!";
            }

            respond.json(prepareMessage(msg));
        }
    });
}
function addNewUser(request, respond) {
    // Let's say we are only updating the First Name of a user.
    // Create a new User object with the values from the client.
    // For those fields that you don't need to update, use null value. 
    var user = new User(null, request.body.username, request.body.first_name, request.body.last_name, request.body.email, request.body.birthday,request.body.address,request.body.gender,request.body.phoneNumber,request.body.password);

    // Pass the 'user' instance that you created above into the updateUserFirstName function from the userDB class.
    userDB.addNewUser(user, function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}

function updateFirstName(request, respond) {
    // Let's say we are only updating the First Name of a user.
    // Create a new User object with the values from the client.
    // For those fields that you don't need to update, use null value. 
    var user = new User(request.params.userid,null, request.body.first_name,null,null,null,null,null,null,null);

    // Pass the 'user' instance that you created above into the updateUserFirstName function from the userDB class.
    userDB.updateFirstName(user, function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}

function getAllUsers(request, respond) {
    userDB.getAllUsers(function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}
function deleteUser(request, respond) {
    userDB.deleteUser(function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}
// This function creates a custom message to be sent back
// to the client. 
function prepareMessage(msg) {
    var obj = { "message": msg };

    return obj;
}

module.exports = { authenticate, authenticateByDB,addNewUser, updateFirstName, getAllUsers,deleteUser }; 