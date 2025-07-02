import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import alumnRouter from "./src/routes/alumno.routes.js";
import rickRouter from "./src/routes/rickMorty.routes.js";

import docenteRoutes from "./src/routes/docentes.routes.js";
import materiasRoutes from "./src/routes/materias.routes.js";
import dogsRouter from "./src/routes/dogs.routes.js";
import pokeRouter from "./src/routes/poke.routes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/alumns", alumnRouter);
app.use("/docentes", docenteRoutes);
app.use("/materias", materiasRoutes);

app.use("/rickandmorty", rickRouter);
app.use("/dogs", dogsRouter);
app.use("/pokemon", pokeRouter);

app.listen(process.env.PORT, () => {
	console.log(`Lanzado en http://localhost:${process.env.PORT}`);
});
