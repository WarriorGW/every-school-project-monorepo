import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
// Esto es para usar las rutas sepa como funciona xd
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use(indexRoutes);
app.use(taskRoutes);

app.listen(PORT);
console.log(`Corriendose en el ${PORT}`);
