import { pool } from "../database/connection.js";

export const getAllMaterias = async (req, res) => {
	try {
		const [result] = await pool.query("SELECT * FROM materias");
		res.json(result);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const getOneMateria = async (req, res) => {
	try {
		const [result] = await pool.query(
			"SELECT * FROM materias WHERE ID_Materia = ?",
			[req.params.materiaID]
		);

		if (result.length === 0) {
			return res.status(404).json({ message: "Materia no encontrada" });
		}

		res.json(result[0]);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const createMateria = async (req, res) => {
	try {
		const [result] = await pool.query("INSERT INTO materias SET ?", req.body);

		res.json({
			message: "Materia creada",
			ID_Materia: result.insertId,
		});
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const updateMateria = async (req, res) => {
	try {
		const [result] = await pool.query(
			"UPDATE materias SET ? WHERE ID_Materia = ?",
			[req.body, req.params.materiaID]
		);

		res.json({ message: "Materia actualizada" });
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const deleteMateria = async (req, res) => {
	try {
		const [result] = await pool.query(
			"DELETE FROM materias WHERE ID_Materia = ?",
			[req.params.materiaID]
		);

		res.json({ message: "Materia eliminada" });
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};
