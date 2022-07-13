import Clima from '../models/PostClima'
require('dotenv').config();
const axios = require('axios');
const apiKeyClima = process.env.KEY_CLIMA
const city = process.env.CITY

console.log(apiKeyClima)

export const getClima = async (req, res) => {

    var config = {
        method: 'get',
        url: `http://api.weatherstack.com/current?access_key=${apiKeyClima}&query=${city}&forecast_days=1&hourly=1`,
        headers: {}
    };
    
    
    axios(config)
        .then(function (responseClima) {
            console.log(JSON.stringify(responseClima.data));
            console.log(responseClima)
        })
        .catch(function (error) {
            console.log(error);
    });

    res.json('OK')

}