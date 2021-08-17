// Imports
const request = require('request');

// Variables
const accessToken = 'pk.eyJ1Ijoib21lcmtvOTYiLCJhIjoiY2p1dHF0NnNyMDV0cjQ0bGszdjNyNGp4dyJ9.MikQaIw5olohSIzPJHhZnA';

// Geocoding
const geocoding = (address, callback) => {
  request(
    { 
      url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${accessToken}`,
      json: true
    },
    (error, response) => {
      // Handling Erros
      if (error) {
        return callback('There was an error with location servers.', undefined);
      }

      // Handling Missing Data
      if (response.body.features.length === 0) {
        return callback('Unable to find location', undefined);
      }

      // Returning Data
      return callback(undefined, {
        location: response.body.features[0].place_name,
        longitude: response.body.features[0].center[0],
        latitude: response.body.features[0].center[1]
      });
    }
  );
}

// Exports
module.exports = geocoding;