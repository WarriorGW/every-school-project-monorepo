import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
// Instalar una mamada llamada Formik para los formularios
import { useTasks } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";

function FormT() {
	const { createTask, getTask, updateTask } = useTasks();
	const [task, setTask] = useState({
		title: "",
		descr: "",
	});
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const loadTask = async () => {
			if (params.id) {
				const task = await getTask(params.id);
				setTask({
					title: task.title,
					descr: task.descr,
				});
			}
		};
		loadTask();
	});

	return (
		<div>
			<h1>{params.id ? "Editar task" : "Nueva task"}</h1>
			<Formik
				initialValues={task}
				enableReinitialize={true}
				onSubmit={async (values, actions) => {
					console.log(values);
					if (params.id) {
						await updateTask(params.id, values);
						navigate("/");
						console.log("Actuaalizado");
					} else {
						await createTask(values);
					}
					actions.resetForm();
				}}
			>
				{({ handleChange, handleSubmit, values, isSubmitting }) => (
					<Form onSubmit={handleSubmit}>
						<label>Titulo: </label>
						<input
							type="text"
							name="title"
							placeholder="Escribe un titulo"
							onChange={handleChange}
							value={values.title}
						/>

						<label>Descripcion: </label>
						<textarea
							name="descr"
							rows={3}
							placeholder="Escribe una descripcion"
							onChange={handleChange}
							value={values.descr}
						></textarea>

						<button type="submit" disabled={isSubmitting}>
							{isSubmitting ? "Guardando..." : "Guardar"}
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default FormT;
