require('dotenv').config();
import bodyParser from "body-parser";
const path = require('path');
import express from "express";
import morgan from "morgan";
import pkg from "../../package.json";

import postRoutes from "../routes/post.routes";

import {createClimaDefault} from '../libs/initialSetUp';

const app = express();
createClimaDefault();

app.set('port', Number(process.env.PORT) || 3344);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}))

app.set('pkg', pkg);

app.use('/img', express.static(path.join(__dirname, '../public/img/temp')));
app.use('/css', express.static(path.join(__dirname, '../public/css')));       

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