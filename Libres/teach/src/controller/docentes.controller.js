const pool = require("../connections/SOA_DB.js");

const getAllDocentes = async (req, res) => {
	try {
		const [response] = await pool.query("SELECT * FROM docentes");
		res.send(response);
	} catch (error) {
		res.send({ error: error.message });
	}
};

const getOneDocente = async (req, res) => {
	try {
		const [response] = await pool.query(
			"SELECT * FROM docentes WHERE ID_Docente = ?",
			[req.params.docenteID]
		);
		res.send(response);
	} catch (error) {
		res.send({ error: error.message });
	}
};

const createDocente = async (req, res) => {
	try {
		const [response] = await pool.query("INSERT INTO docentes SET ?", [
			req.body,
		]);
		res.send(response);
	} catch (error) {
		res.send({ error: error.message });
	}
};

const updateDocente = async (req, res) => {
	try {
		const [response] = await pool.query(
			"UPDATE docentes SET ? WHERE ID_Docente=?",
			[req.body, req.params.docenteID]
		);
		res.send(response);
	} catch (error) {
		res.send({ error: error.message });
	}
};

const deleteDocente = async (req, res) => {
	try {
		const [response] = await pool.query(
			"DELETE FROM docentes WHERE ID_Docente=?",
			[req.params.docenteID]
		);
		res.send(response);
	} catch (error) {
		res.send({ error: error.message });
	}
};

module.exports = {
	getAllDocentes,
	getOneDocente,
	createDocente,
	updateDocente,
	deleteDocente,
};
