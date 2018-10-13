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
    var spotifyThis = function(liriSearch){

    if(liriSearch == null || liriSearch == undefined){
        var liriSearch = "The Sign";
    
    }

        spotify.lirisearch({
            type: "track",
            quert: userInput,
            limit: 1
        },function(err, data){
            if(err) {
                return console.log(err);

            } else {
                //artist's namne
                console.log("Artist:" + data.track.items[0].album.artist[0].name);
            }
        }   
     )



    }

    //TODO 2

    var movieThis= function(liriSearch){
        if(liriSearch == null || liriSearch == undefined){
            var liriSearch = "Mr. Nobody";
        
        }

        // Then run a request to the OMDB API with the movie specified
    request("http://www.omdbapi.com/?t=" + liriSearch + "&y=&plot=short&tomatoes=true&apikey=trilogy", function(error, response, body) {

    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {

        var jsonBody = JSON.parse(body)

  
      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      console.log("The movie's rating is: " + jsonBody.imdbRating);
      console.log("Title: " + jsonBody.Title);
      console.log("Year: " + jsonBody.Year);
      console.log("Rotten Tomatoes Rating: " + jsonBody.tomatoeMeter);
      console.log("Country: " + jsonBody.Country);
      console.log("Language: " + jsonBody.Language);
      console.log("Plot: " + jsonBody.Plot);
      console.log("Actors: " + jsonBody.Actors);
      
      }
  });
  


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




    



 

        
        
    
