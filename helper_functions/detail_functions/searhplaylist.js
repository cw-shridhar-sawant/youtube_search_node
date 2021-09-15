var request = require("request");
const YouTube = require("youtube-sr").default;
const ytpl = require('ytpl');

//function that fetches the definition for a word and passes it to the respective display function.
module.exports = async function (word, res) {
    var searchpara = word;
    //console.log("searching yt for " + searchpara)
    const firstResultBatch = await ytpl(searchpara, { pages: 1 });
    console.log(firstResultBatch.items);
};
