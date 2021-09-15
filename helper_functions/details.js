var searchvideo = require("./detail_functions/searchvideo"),
    searhplaylist = require("./detail_functions/searhplaylist");

//exporting all the all the neccessary functions to app.js at once
module.exports = {
    video: searchvideo,
    playlist: searhplaylist
};