require('dotenv').config();
import axios from "axios";
// import screen from "../libs/generateImage";

const pageId = process.env.PAGE_ID
const accesToken = process.env.ACCESS_TOKEN

export const createPostClima = async (req, res) => {

	// await screen()

    const data = req.body;
    // console.log(data);
	

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

	return data;

}

