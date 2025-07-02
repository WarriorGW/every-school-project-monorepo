import { Router } from "express";

import {
	getAllAlumns,
	getOneAlumn,
	createAlumn,
	updateAlumn,
	deleteAlumn,
} from "../controllers/alumno.controller.js";

const alumnRouter = Router();

alumnRouter.get("/", getAllAlumns);
alumnRouter.get("/:alumnId", getOneAlumn);
alumnRouter.post("/", createAlumn);
alumnRouter.put("/:alumnId", updateAlumn);
alumnRouter.delete("/:alumnId", deleteAlumn);

export default alumnRouter;
