import { Router } from "express";
import {
	createDocente,
	deleteDocente,
	getAllDocentes,
	getOneDocente,
	updateDocente,
} from "../controllers/docente.controller.js";

const docenteRoutes = Router();

docenteRoutes.get("/", getAllDocentes);
docenteRoutes.get("/:docenteID", getOneDocente);
docenteRoutes.post("/", createDocente);
docenteRoutes.put("/:docenteID", updateDocente);
docenteRoutes.delete("/:docenteID", deleteDocente);

export default docenteRoutes;
