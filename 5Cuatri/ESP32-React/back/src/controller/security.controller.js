const { pool } = require("../connections/INFO_DB.js");

const getAllfol = async (req, res) => {
	try {
		const [response] = await pool.query(
			`SELECT * FROM ${req.params.tabla} ORDER BY timestamp DESC`
		);
		res.send(response);
	} catch (error) {
		res.send({ error: error.message });
	}
};

const postFol = async (req, res) => {
	try {
		const [response] = await pool.query(
			`INSERT INTO ${req.params.tabla} SET ?`,
			[req.body]
		);
		res.send({
			message: "Data inserted successfully",
			response: response,
		});
	} catch (error) {
		res.send({ error: error.message });
	}
};

module.exports = { getAllfol, postFol };
