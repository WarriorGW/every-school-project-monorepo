import { pool } from "../database/connection.js";

export const getAllDocentes = async (req, res) => {
	try {
		const [result] = await pool.query("SELECT * FROM docentes");
		res.json(result);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const getOneDocente = async (req, res) => {
	try {
		const [result] = await pool.query(
			"SELECT * FROM docentes WHERE ID_Docente = ?",
			[req.params.docenteID]
		);

		if (result.length === 0) {
			return res.status(404).json({ message: "Docente no encontrado" });
		}

		res.json(result[0]);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const createDocente = async (req, res) => {
	try {
		const [result] = await pool.query("INSERT INTO docentes SET ?", req.body);

		res.json({
			message: "Docente creado",
			ID_Docente: result.insertId,
		});
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const updateDocente = async (req, res) => {
	try {
		const [result] = await pool.query(
			"UPDATE docentes SET ? WHERE ID_Docente = ?",
			[req.body, req.params.docenteID]
		);

		res.json({ message: "Docente actualizado" });
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const deleteDocente = async (req, res) => {
	try {
		const [result] = await pool.query(
			"DELETE FROM docentes WHERE ID_Docente = ?",
			[req.params.docenteID]
		);

		res.json({ message: "Docente eliminado" });
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};
