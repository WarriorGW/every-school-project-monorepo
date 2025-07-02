const { Router } = require("express");

const {
	getAllDocentes,
	getOneDocente,
	createDocente,
	updateDocente,
	deleteDocente,
} = require("../controller/docentes.controller.js");

const routesDocentes = Router();

routesDocentes.get("/", getAllDocentes);
routesDocentes.get("/:docenteID", getOneDocente);
routesDocentes.post("/", createDocente);
routesDocentes.put("/:docenteID", updateDocente);
routesDocentes.delete("/:docenteID", deleteDocente);

module.exports = routesDocentes;
