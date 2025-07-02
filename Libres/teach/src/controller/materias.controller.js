const pool = require("../connections/SOA_DB.js");

const getAllMaterias = async (req, res) => {
	try {
		const [response] = await pool.query("SELECT * FROM materias");
		res.send(response);
	} catch (error) {
		res.send({ error: error.message });
	}
};

const getOneMateria = async (req, res) => {
	try {
		const [response] = await pool.query(
			"SELECT * FROM materias WHERE ID_Materia = ?",
			[req.params.materiaID]
		);
		res.send(response);
	} catch (error) {
		res.send({ error: error.message });
	}
};

const createMateria = async (req, res) => {
	try {
		const [response] = await pool.query("INSERT INTO materias SET ?", [
			req.body,
		]);
		res.send(response);
	} catch (error) {
		res.send({ error: error.message });
	}
};

const updateMateria = async (req, res) => {
	try {
		const [response] = await pool.query(
			"UPDATE materias SET ? WHERE ID_Materia=?",
			[req.body, req.params.materiaID]
		);
		res.send(response);
	} catch (error) {
		res.send({ error: error.message });
	}
};

const deleteMateria = async (req, res) => {
	try {
		const [response] = await pool.query(
			"DELETE FROM materias WHERE ID_Materia=?",
			[req.params.materiaID]
		);
		res.send(response);
	} catch (error) {
		res.send({ error: error.message });
	}
};

module.exports = {
	getAllMaterias,
	getOneMateria,
	createMateria,
	updateMateria,
	deleteMateria,
};
