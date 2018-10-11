require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var request = require("request");

//take in the method name and user search
var liriMethod = process.argv[2];
var liriSearch = process.argv[3];


// Concert-this-Method
var concertThis = function(liriSearch) {
    console.log(liriSearch);
}


switch (liriMethod) {
    case "concert-this":
         concertThis(liriSearch)
        break;
    case "spotify-this-song":
         spotifyThis()
         break;
    case "movie-this":
         movieThis()
         break;
    case "do-what-it-says":
         doWhatItSays()
         break;
         
default: console.log("command dosen't match:available commands are: concert-this, spotify-this-song,movie-this,do-what-it-says:")
}



    



 

        
        
    
