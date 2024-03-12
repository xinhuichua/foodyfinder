"use strict";

class Favourite {
    constructor(favouriteid,restid,userid) {
        this.favouriteid = favouriteid;
        this.restid = restid;
        this.userid = userid;
    }
    getFavouriteId(){
        return this.favouriteid;
    }

    getRestId() {
        return this.restid;
    }
    getUserId(){
        return this.userid;
    }

}

module.exports = Favourite; 