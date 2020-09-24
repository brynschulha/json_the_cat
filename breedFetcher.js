const request = require('request');

// const breedName = process.argv.slice(2);

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    // console.log('error:', error);
    if (error) {
      // console.log(error);
      // console.log("Request Failed");
      return callback(error, null);
    }
    // console.log('statusCode:', response && response.statusCode);
    // console.log('body:', body);
    const data = JSON.parse(body);
    // console.log(data);
    if (!data[0]) {
      let noBreedFoundError = `${breedName} is invalid. Please use a new breed name.`;
      // console.log("Breed not found");
      return callback(noBreedFoundError, null);
    }
    // console.log(data);
    // console.log(typeof data);
    // console.log(data[0]["description"]);
    return callback(null, data[0]["description"]);
  });
};

// fetchBreedDescription();

module.exports = { fetchBreedDescription };
