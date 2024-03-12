"use strict";

class Restaurant {
    constructor(restid, restname, phoneNumber,place, thumb,information,menu,category,poster) {
        this.restid = restid;
        this.restname = restname;
        this.phoneNumber = phoneNumber;
        this.place = place;
        this.thumb = thumb;
        this.information = information;
        this.menu = menu;
        this.category = category;
        this.poster = poster;
    }

    getRestId() {
        return this.restid;
    }

    getRestName() {
        return this.restname;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }
    getPlace() {
        return this.place;
    }

    getThumb() {
        return this.thumb;
    }

    getInformation() {
        return this.information;
    }

    getMenu() {
        return this.menu;
    }

    getCategory() {
        return this.category;
    }
    getPoster() {
        return this.poster;
    }

}

module.exports = Restaurant; 