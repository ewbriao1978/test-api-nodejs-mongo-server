import express from "express";
import { saveMovieInfo, getMovieInfo, deleteMovieInfo } from "../controllers/movieController.js";

const router = express.Router();

router.post('/',saveMovieInfo);
router.get('/',getMovieInfo);
router.delete('/:id',deleteMovieInfo);

export default router;