import { Router } from "express";

import moviesControllers from "../controllers/movies-controllers.js";

const moviesRouters = Router();

moviesRouters.get("/movies", moviesControllers.getMovies);

export default moviesRouters;
