import { pool } from "../database/connection.js";

export const getAllAlumns = async (req, res) => {
	try {
		const [result] = await pool.query("SELECT * FROM alumnos");
		res.json(result);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const getOneAlumn = async (req, res) => {
	try {
		const [result] = await pool.query(
			"SELECT * FROM alumnos WHERE ID_Alumno = ?",
			[req.params.alumnId]
		);

		if (result.length === 0) {
			return res.status(404).json({ message: "Alumno no encontrado" });
		}

		res.json(result[0]);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const createAlumn = async (req, res) => {
	try {
		const [result] = await pool.query("INSERT INTO alumnos SET ?", req.body);
		res.json(result);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const updateAlumn = async (req, res) => {
	try {
		const result = await pool.query("UPDATE alumnos SET ? WHERE ID_Alumno=?;", [
			req.body,
			req.params.alumnId,
		]);
		res.json(result);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const deleteAlumn = async (req, res) => {
	try {
		const [result] = await pool.query(
			"DELETE FROM alumnos WHERE ID_Alumno = ?",
			[req.params.alumnId]
		);
		if (result.affectedRows === 0)
			return res.status(404).json({ message: "Producto no encontrado" });
		return res.sendStatus(204);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};
