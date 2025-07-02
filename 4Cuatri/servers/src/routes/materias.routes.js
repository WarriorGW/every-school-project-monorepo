import { Router } from "express";
import {
	createMateria,
	deleteMateria,
	getAllMaterias,
	getOneMateria,
	updateMateria,
} from "../controllers/meteria.controller.js";

const materiasRoutes = Router();

materiasRoutes.get("/", getAllMaterias);
materiasRoutes.get("/:materiaID", getOneMateria);
materiasRoutes.post("/", createMateria);
materiasRoutes.put("/:materiaID", updateMateria);
materiasRoutes.delete("/:materiaID", deleteMateria);

export default materiasRoutes;
