require('dotenv').config();
import axios from "axios";

const pageId = process.env.PAGE_ID
const accesToken = process.env.ACCESS_TOKEN

export const createPostClima = (req, res) => {

    const data = req.body;
    console.log(data)

    const text = req.body.text;
    const img = 'https://img.freepik.com/vector-premium/lindo-pequeno-armadillo-dibujos-animados-corriendo_188253-4527.jpg'
	const description = 'Holaa que hace'

	var config = {
		method: "post",
		url: `https://graph.facebook.com/v14.0/${pageId}/photos?url=${img}&caption=${description}&access_token=${accesToken}`,
		headers: {},
	};

	axios(config)
		.then(function (response) {
			console.log(JSON.stringify(response.data));
			res.status(200).json({res: 'Succes ok 200'})
		})
		.catch(function (error) {
			console.log(error);
			res.json({error})
	});

}

