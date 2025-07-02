import { Router } from "express";

import { getPoke } from "../controllers/pokemon.js";

const dogsRouter = Router();

dogsRouter.get("/", getPoke);

export default dogsRouter;
