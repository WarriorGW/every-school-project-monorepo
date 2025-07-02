const { Router } = require("express");

const {
	getAllMaterias,
	getOneMateria,
	createMateria,
	updateMateria,
	deleteMateria,
} = require("../controller/materias.controller.js");

const routesMaterias = Router();

routesMaterias.get("/", getAllMaterias);
routesMaterias.get("/:materiaID", getOneMateria);
routesMaterias.post("/", createMateria);
routesMaterias.put("/:materiaID", updateMateria);
routesMaterias.delete("/:materiaID", deleteMateria);

module.exports = routesMaterias;
