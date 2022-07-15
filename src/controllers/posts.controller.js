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
			const {name, country, region, lat, lon, localtime} = responseClima.data.location
			const {temperature, weather_code, weather_descriptions, wind_speed, wind_degree, wind_dir, pressure, precip, humidity, cloudcover, feelslike, uv_index, visibility, is_day} = responseClima.data.current

			console.log(name, region, country)

			const deleteClimaFn = async () => {
				const eliminar = await Clima.deleteMany({})
			}

			deleteClimaFn()

			const newClima = async () => {
				new Clima({
					city: name,
					estado: region,
					pais: country,
					longitud: lon,
					latitud: lat,
					horalocal: localtime,
					temperatura: temperature,
					code: weather_code,
					description: weather_descriptions,
					velocidadViento: wind_speed,
					gradosViento: wind_degree,
					directionViento: wind_dir,
					presion: pressure,
					precipitacion: precip,
					humedad: humidity,
					nubusidad: cloudcover,
					rayosUv: uv_index,
					visibilidad: visibility,
					isDay: is_day
				}).save()
			}
			newClima()


        })
        .catch(function (error) {
            console.log(error);
    });


	await screen()

    const dataPost = req.body;
    console.log(dataPost, 'jhhi');

    // const text = req.body.text;
    const img = 'https://clima.lamaschingona.com.mx/img/clima.png'
	const description = 'Prueba hsfdhdfkdnjcisdicdjicdeoies'

	var configg = {
		method: "post",
		url: `https://graph.facebook.com/v14.0/${pageId}/photos?url=${img}&caption=${description}&access_token=${accesToken}`,
		headers: {},
	};

	// axios(configg)
	// 	.then(function (response) {
	// 		console.log(JSON.stringify(response.data));
	// 		res.status(200).json({res: 'Succes ok 200'})
	// 	})
	// 	.catch(function (error) {
	// 		console.log(error);
	// 		res.json({error})
	// });

}





