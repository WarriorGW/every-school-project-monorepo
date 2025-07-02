import { Router } from "express";
import {
	getTask,
	createTasks,
	updateTasks,
	getTasks,
	deleteTasks,
} from "../controllers/tasks.controllers.js";

const router = Router();

// todas las rutas que son de las tareas vienen aqui
router.get("/tasks", getTasks);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTasks);

router.put("/tasks/:id", updateTasks);

router.delete("/tasks/:id", deleteTasks);

export default router;
