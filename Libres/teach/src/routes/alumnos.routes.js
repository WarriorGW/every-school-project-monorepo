const { Router } = require("express");

const {
	getAllAlumnos,
	getOneAlumno,
	createAlumno,
	updateAlumno,
	deleteAlumno,
} = require("../controller/alumnos.controller.js");

const routesAlumnos = Router();

routesAlumnos.get("/", getAllAlumnos);
routesAlumnos.get("/:alumnoID", getOneAlumno);
routesAlumnos.post("/", createAlumno);
routesAlumnos.put("/:alumnoID", updateAlumno);
routesAlumnos.delete("/:alumnoID", deleteAlumno);

module.exports = routesAlumnos;
