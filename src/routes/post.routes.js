import {Router} from "express";
import axios from "axios";


const router = Router();
import * as postCtrl from '../controllers/posts.controller';
// import * as climaCtrl from "../controllers/clima.controller";

router.post('/', postCtrl.createPostClima)
router.get('/', postCtrl.getClimaDb)


export default router;