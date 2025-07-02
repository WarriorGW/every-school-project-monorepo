import React from "react";
import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
	const { deleteTask, toggleTaskDone } = useTasks();
	const navigate = useNavigate();

	const handleDone = async () => {
		await toggleTaskDone(task.id);
	};

	return (
		<div>
			<h2>
				{task.id} : {task.title}
			</h2>
			<p>{task.descr}</p>
			<span>{task.done === 1 ? "✔️" : "❌"}</span>
			<span>{task.createAt}</span>
			<button onClick={() => deleteTask(task.id)}>Delete</button>
			<button onClick={() => navigate(`/editar/${task.id}`)}>Editar</button>
			<button onClick={() => handleDone(task.done)}>Toggle done</button>
		</div>
	);
}

export default TaskCard;
