var request = require("request");
const YouTube = require("youtube-sr").default;

//function that fetches the definition for a word and passes it to the respective display function.
module.exports = function (word, res) {
    var searchpara = word;
    //console.log("searching yt for " + searchpara)
    YouTube.search(searchpara, { limit: 3, safeSearch: true })
        .then(x => console.log(x))
        .catch(console.error);
};
