import { Router } from "express";

import { getPersonajes } from "../controllers/rickMorty.js";

const rickRouter = Router();

rickRouter.get("/", getPersonajes);

export default rickRouter;
