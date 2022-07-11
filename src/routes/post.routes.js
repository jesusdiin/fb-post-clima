import {Router} from "express";

const router = Router();
import * as postCtrl from '../controllers/posts.controller';

router.post('/', postCtrl.createPostClima)
router.get('/', (req, res) => {
    res.render('clima.pug')
})

export default router;