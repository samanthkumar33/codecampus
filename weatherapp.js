const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=2b9bbd52d7c8d73293e5febdf89443b1&query=bhilai';


request({ url: url, json: true }, function(error, response) {
    if(error) {
        console.log(error)
        console.log('Unable to find website')
    } else if(response.body.error) {
        console.log(response.body.error.info)
    } else if(response.body.current && response.body.location) {
        const current = response.body.current;
        const location = response.body.location;
        console.log(`
            Todays Weather: ${current.weather_descriptions[0]}
            Temp: ${current.temperature} in Celcious
            Location: ${location.name}, ${location.region} (${location.country})
            Humidity: ${current.humidity}
        `)
    } else {
        console.log('Invalid output')
    }
});