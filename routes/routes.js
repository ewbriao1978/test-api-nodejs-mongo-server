import express from "express";
import { saveMovieInfo } from "../controllers/movieController.js";

const router = express.Router();

router.post('/',saveMovieInfo);

export default router;