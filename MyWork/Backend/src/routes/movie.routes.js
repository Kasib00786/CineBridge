import express from "express";
import { addMovie, getMovies } from "../controllers/movie.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validate.middleware.js";
import { movieSchema } from "../schemas/movie.schema.js";

const router = express.Router();

router.post("/", authMiddleware, validate(movieSchema), addMovie);
router.get("/", authMiddleware, getMovies);

export default router;
