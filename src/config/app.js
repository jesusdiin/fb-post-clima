require('dotenv').config();
import bodyParser from "body-parser";
const path = require('path');
import express from "express";
import morgan from "morgan";
import pkg from "../../package.json";

import postRoutes from "../routes/post.routes";

const app = express();
app.set('port', Number(process.env.PORT) || 3344);

app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}))

app.set('pkg', pkg);

app.use('/img', express.static(path.join(__dirname, '../public/img/temp')));       

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        description: app.get('pkg').description,
        author: app.get('pkg').author,
        version: app.get('pkg').version
    })
})

app.use('/post', postRoutes);

export default app;