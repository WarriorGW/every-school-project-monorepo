const { createPool } = require("mysql2/promise");

const pool = createPool({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
});

pool
	.getConnection()
	.then((connection) => {
		console.log("Conexión correcta a la base de datos");
		connection.release(); // Libera la conexión
	})
	.catch((error) => {
		console.error("Error al conectar a la base de datos:", error);
	});

module.exports = pool;
