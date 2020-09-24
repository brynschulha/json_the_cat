const request = require('request');

const breedFetcher = function(breedName) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    // console.log('error:', error);
    if (error) {
      // console.log(error);
      console.log("Request Failed");
      return;
    }
    // console.log('statusCode:', response && response.statusCode);
    // console.log('body:', body);
    const data = JSON.parse(body);
    // console.log(data);
    if (data.length === 0) {
      console.log("Breed not found");
      return;
    }
    // console.log(data);
    // console.log(typeof data);
    console.log(data[0]["description"]);
  });
};

breedFetcher(process.argv.slice(2));
