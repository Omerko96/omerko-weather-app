// Imports
const request = require('request');

// Variables
const accessToken = 'ca51bbe4a2891d4eb1524ffadbc1f1e4';

// Forecast
const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/${accessToken}/${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    // Handling Errors
    if (error) {
      return callback('There was an error with forecast servers.', undefined);
    }

    // Handle Missing Data
    if (body.error) {
      return callback('Unable to find location.', undefined);
    }

    // Returning Data
    callback(undefined, {
      temperature: body.currently.temperature,
      humidity: body.currently.humidity,
      pressure: body.currently.pressure
    });
  });
}

// Exports
module.exports = forecast;