require("dotenv").config();
const cors = require("cors");
const express = require("express");

const routesAlumnos = require("./src/routes/alumnos.routes.js");
const routesMaterias = require("./src/routes/materia.routes.js");
const routesDocentes = require("./src/routes/docentes.routes.js");

const routePokemon = require("./src/routes/pokemon.routes.js");
const routeDogs = require("./src/routes/dogs.routes.js");
const routeRandM = require("./src/routes/randm.routes.js");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/alumns", routesAlumnos);
app.use("/materias", routesMaterias);
app.use("/docentes", routesDocentes);

app.use("/pokemon", routePokemon);
app.use("/dogs", routeDogs);
app.use("/rickandmorty", routeRandM);

app.listen(process.env.PORT, () => {
	console.log(`http://localhost:${process.env.PORT}`);
});
