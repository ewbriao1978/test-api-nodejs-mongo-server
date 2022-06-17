import express from "express";
import { saveMovieInfo, getMovieInfo } from "../controllers/movieController.js";

const router = express.Router();

router.post('/',saveMovieInfo);
router.get('/',getMovieInfo);

export default router;