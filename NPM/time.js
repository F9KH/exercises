let timeNow = new Date()
console.log(timeNow)

const moment = require('moment')
let formattedTimeNow = moment().format("MMMM Do, YYYY")
console.log(formattedTimeNow) 


const request = require('request');

// request('https://ele-people-api-8eb0b1bd9b96.herokuapp.com/people', function (error, response, body) {
//   console.log(body); 
// });



const url = "http://www.omdbapi.com/?apikey=a14dfdfe&t=Guardians of the Galaxy Vol.2"
request(url, function (error, response, body) {
     const data = JSON.parse(body) 
    console.log(data.Title + data.Released)
  });

