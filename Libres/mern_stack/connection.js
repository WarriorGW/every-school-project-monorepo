const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mernstack");

const objbd = mongoose.connection;

objbd.on("connected", () => {
	console.log("Conexion exitosa");
});

objbd.on("error", () => {
	console.log("Fallo la conexion");
});

module.exports = mongoose;
