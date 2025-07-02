import { Router } from "express";

import { getDogs } from "../controllers/dogs.js";

const dogsRouter = Router();

dogsRouter.get("/", getDogs);

export default dogsRouter;
