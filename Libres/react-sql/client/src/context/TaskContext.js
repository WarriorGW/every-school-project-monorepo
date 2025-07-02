import { useContext, useState } from "react";
import {
	getTasksReq,
	deleteTaskReq,
	createTaskReq,
	getTaskReq,
	updateTaskReq,
	togTaskDoneReq,
} from "../api/tasks.api.js";
import { TaskCont } from "./TaskBug.js";

export const useTasks = () => {
	const context = useContext(TaskCont);
	if (!context) {
		throw new Error("useTasks deberia de estar dentro de TaskContextProvider");
	}
	return context;
};

export const TaskContProvider = ({ children }) => {
	const [tasks, setTasks] = useState([]);

	async function loadTasks() {
		const response = await getTasksReq();
		setTasks(response.data);
	}

	const deleteTask = async (id) => {
		try {
			const response = await deleteTaskReq(id);
			console.log(response);
			setTasks(tasks.filter((task) => task.id !== id));
		} catch (error) {
			console.log(error);
		}
	};

	const createTask = async (task) => {
		try {
			const response = await createTaskReq(task);
			// setTasks([...tasks, response.data]);
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};

	const getTask = async (id) => {
		try {
			const response = await getTaskReq(id);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	};

	const updateTask = async (id, newVal) => {
		try {
			const response = await updateTaskReq(id, newVal);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	const toggleTaskDone = async (id) => {
		try {
			const taskFound = tasks.find((task) => task.id === id);
			await togTaskDoneReq(id, taskFound.done === 0 ? true : false);
			setTasks(
				tasks.map((task) =>
					task.id === id ? { ...task, done: !task.done } : task.done
				)
			);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<TaskCont.Provider
			value={{
				tasks,
				loadTasks,
				deleteTask,
				createTask,
				getTask,
				updateTask,
				toggleTaskDone,
			}}
		>
			{children}
		</TaskCont.Provider>
	);
};
