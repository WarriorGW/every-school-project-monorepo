import React from "react";
import { useEffect } from "react";
import TaskCard from "../components/TaskCard.js";

import { useTasks } from "../context/TaskContext.js";

function Tasks() {
	const { tasks, loadTasks } = useTasks();
	useEffect(() => {
		loadTasks();
	}, [loadTasks]);

	function renderMain() {
		if (tasks.length === 0) return <h1>No hay tareas uwu</h1>;
		return tasks.map((task) => <TaskCard task={task} key={task.id} />);
	}

	return (
		<div>
			<h1>Tasks</h1>
			{renderMain()}
		</div>
	);
}

export default Tasks;
