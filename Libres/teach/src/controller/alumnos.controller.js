const pool = require("../connections/SOA_DB.js");

const getAllAlumnos = async (req, res) => {
	try {
		const [response] = await pool.query("SELECT * FROM alumnos");
		res.send(response);
	} catch (error) {
		res.send({ error: error.message });
	}
};

const getOneAlumno = async (req, res) => {
	try {
		const [response] = await pool.query(
			"SELECT * FROM alumnos WHERE ID_Alumno = ?",
			[req.params.alumnoID]
		);
		res.send(response);
	} catch (error) {
		res.send({ error: error.message });
	}
};

const createAlumno = async (req, res) => {
	try {
		const [response] = await pool.query("INSERT INTO alumnos SET ?", [
			req.body,
		]);
		res.send(response);
	} catch (error) {
		res.send({ error: error.message });
	}
};

const updateAlumno = async (req, res) => {
	try {
		const [response] = await pool.query(
			"UPDATE alumnos SET ? WHERE ID_Alumno=?",
			[req.body, req.params.alumnoID]
		);
		res.send(response);
	} catch (error) {
		res.send({ error: error.message });
	}
};

const deleteAlumno = async (req, res) => {
	try {
		const [response] = await pool.query(
			"DELETE FROM alumnos WHERE ID_Alumno=?",
			[req.params.alumnoID]
		);
		res.send(response);
	} catch (error) {
		res.send({ error: error.message });
	}
};

module.exports = {
	getAllAlumnos,
	getOneAlumno,
	createAlumno,
	updateAlumno,
	deleteAlumno,
};
