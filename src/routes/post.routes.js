import {Router} from "express";

const router = Router();
import * as postCtrl from '../controllers/posts.controller';

router.post('/', postCtrl.createPostClima)

export default router;