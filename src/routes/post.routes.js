import {Router} from "express";
import axios from "axios";


const router = Router();
import * as postCtrl from '../controllers/posts.controller';
// import * as climaCtrl from "../controllers/clima.controller";

router.post('/', postCtrl.createPostClima)
router.get('/', (req, res) => {
    res.render('clima.pug')
})

export default router;