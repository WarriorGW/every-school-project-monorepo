const express = require("express");
const app = express();

// Importar conexion de MongoDB

const archivoDB = require("./connection");

// Importacion del archivo de rutas y modelo de usuario

const rutausuaruio = require("./routes/usuario");

// Importacion de body-parser

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "true" }));

// Pequeña prueba para saber si si sirve

app.use("/api/usuario", rutausuaruio);

// Configuracion del servidor basico

app.get("/", (req, res) => {
	res.end("Wenos dias desde el server backend de node uwu");
});

app.listen(5000, function () {
	console.log("El servidor de node esta corriendose en mi");
});

// Nota: tuve que usar el comando npm install nodemon -g
// aparte tambien tuve que abrir con nodemon server.js dentro de un cmd normal, con powershell no jala

// Tambien instalar con npm install mongoose
