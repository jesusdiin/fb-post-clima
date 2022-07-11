require('dotenv').config();
const axios = require('axios');
const apiKeyClima = process.env.KEY_CLIMA
const city = process.env.CITY

console.log(apiKeyClima)

var config = {
    method: 'get',
    url: `http://api.weatherstack.com/current?access_key=${apiKeyClima}&query=${city}`,
    headers: {}
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });