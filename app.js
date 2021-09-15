var details = require("./helper_functions/details");
var args = process.argv;


//calling diiferent methods for different command line arguments
if (args.length === 4) {
    var operation = args[2];
    //console.log(operation)
    switch (operation) {
        case 'video':
            details.video(args[3]);
            break;
        case 'playlist':
            details.playlist(args[3]);
            break;
        default:
            console.log("illegal input");
    }
}