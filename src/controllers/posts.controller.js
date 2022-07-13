require('dotenv').config();
import axios from "axios";
import screen from "../libs/generateImage";
import Clima from '../models/PostClima';

const pageId = process.env.PAGE_ID
const accesToken = process.env.ACCESS_TOKEN
const apiKeyClima = process.env.KEY_CLIMA
const city = process.env.CITY



export const createPostClima = async (req, res) => {

	var config = {
        method: 'get',
        url: `http://api.weatherstack.com/current?access_key=${apiKeyClima}&query=${city}&forecast_days=1&hourly=1`,
        headers: {}
    };
    
    axios(config)
        .then(function (responseClima) {
            console.log(JSON.stringify(responseClima.data));
        })
        .catch(function (error) {
            console.log(error);
    });


	await screen()

    const dataPost = req.body;
    console.log(dataPost, 'jhhi');

    // const text = req.body.text;
    const img = 'https://clima.lamaschingona.com.mx/img/clima.png'
	const description = 'Holaa que k hac'

	var configg = {
		method: "post",
		url: `https://graph.facebook.com/v14.0/${pageId}/photos?url=${img}&caption=${description}&access_token=${accesToken}`,
		headers: {},
	};

	axios(configg)
		.then(function (response) {
			console.log(JSON.stringify(response.data));
			res.status(200).json({res: 'Succes ok 200'})
		})
		.catch(function (error) {
			console.log(error);
			res.json({error})
	});

}





