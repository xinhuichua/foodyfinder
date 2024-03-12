"use strict"

class users{
    constructor(userid, username, first_name, last_name,email,address,birthday,gender,phoneNumber,password){
        this.userid = userid;
        this.username = username;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.birthday = birthday;
        this.address = address;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }
    getUserId(){
        return this.userid;
    }
    getUserName(){
        return this.username;
    }
    getFirstName(){
        return this.first_name;
    }
    getLastName(){
        return this.last_name;
    }

    getEmail(){
        return this.email;
    }
    getBirthday(){
        return this.birthday;
    }
    getAddress(){
        return this.address;
    }
    getGender(){
        return this.gender;
    }
    getPhoneNumber(){
        return this.phoneNumber;
    }
  
    getPassword(){
        return this.password;
    }
    setUserId(userid){
        this.userid =userid;
    }
    setUserName(username){
        this.username = username;
    }
    setFirstName(first_name){
       this.first_name = first_name;
    }
    setLastName(last_name){
        this.last_name = last_name;
    }

    setEmail(email){
        this.email = email;
    }
    setBirthday(birthday){
       this.birthday = birthday;
    }
    setAddress(address){
        this.address = address;
    }
    setGender(gender){
       this.gender = gender
    }
    setPhoneNumber(phoneNumber){
       this.phoneNumber = phoneNumber;
    }
  
    setPassword(password){
       this.password = password;
    }
}
    module.exports = users;