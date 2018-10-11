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

    // This is using the npm package who call the bandsintown
    request("https://rest.bandsintown.com/artists/" + liriSearch + "/events?app_id=codingbootcamp", function(error, response, body) {
    
        // If there were no errors and the 	response code was 200 (i.e. the request was successful)...
        if (!error && response.statusCode === 200) {
         //transform the body string into json object JSON.parse()    
        var jsonBody = JSON.parse(body)

        for (var count = 0; count < jsonBody.length; count ++ ) {
         console.log("Index of the array: " + count)
        //First OBject in the metalicca array
        //console.log(jsonBody[0]);
        // Venue Object inside the metallica array jsonBody[0]venue 
       // console.log(jsonBody[0].venue)
        // Acceessing the name variable inside of venue object
        console.log("Concert Venue: " + jsonBody[count].venue.name)
        // accessing the datetime variable inside of jsonBody
        console.log("Concert Time: " + jsonBody[count].datetime)
        //Access the City and region the venue is in
        console.log("Concert Location: " + jsonBody[count].venue.city +", "+ jsonBody[count].venue.region)
    
        }
    }
        else{
            console.log(error);
        }
      });
    }

    //TODO 1
    var movieThis = function(liriSearch){


    }

    //TODO 2

    var spotifyThis = function(liriSearch){

    }



    //TODO 3

    var doWhatItSays = function(){

    }

switch (liriMethod) {
    case "concert-this":
         concertThis(liriSearch)
        break;
    case "spotify-this-song":
         spotifyThis(liriSearch)
         break;
    case "movie-this":
         movieThis(liriSearch)
         break;
    case "do-what-it-says":
         doWhatItSays()
         break;
         
default: console.log("command dosen't match:available commands are: concert-this, spotify-this-song,movie-this,do-what-it-says:")
}




    



 

        
        
    
