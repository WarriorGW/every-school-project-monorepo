import axios from "axios";

export const getTasksReq = async () => {
	return await axios.get("http://localhost:4000/tasks");
};

export const createTaskReq = async (task) => {
	return await axios.post("http://localhost:4000/tasks", task);
};

export const deleteTaskReq = async (id) => {
	return await axios.delete(`http://localhost:4000/tasks/${id}`);
};

export const getTaskReq = async (id) => {
	return await axios.get(`http://localhost:4000/tasks/${id}`);
};

export const updateTaskReq = async (id, newVal) => {
	return await axios.put(`http://localhost:4000/tasks/${id}`, newVal);
};

export const togTaskDoneReq = async (id, done) => {
	return await axios.put(`http://localhost:4000/tasks/${id}`, {
		done,
	});
};
