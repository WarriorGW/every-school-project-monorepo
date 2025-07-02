const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const schema = mongoose.Schema;

const schemausuario = new schema({
	nombre: String,
	email: String,
	telefono: String,
	idusuario: String,
});

const ModeloUsuario = mongoose.model("usuarios", schemausuario);
module.exports = router;

// Primera ruta de prueba

// router.get("/ejemplo", (req, res) => {
// 	res.end("Saludo, carga desde ruta ejemplo");
// });

// Para usar el body se tiene que instalar una extension en el servidor con npm install body-parser
// Agregar usuario
router.post("/agregarusuario", (req, res) => {
	const nuevousuario = new ModeloUsuario({
		nombre: req.body.nombre,
		email: req.body.email,
		telefono: req.body.telefono,
		idusuario: req.body.idusuario,
	});
	// nuevousuario.save(function (err) {
	// 	if (!err) {
	// 		res.send("Usuario agregado exitadamente");
	// 	} else {
	// 		res.send(err);
	// 	}
	// });
	nuevousuario
		.save()
		.then(() => {
			res.send("Usuario agregado exitosamente");
		})
		.catch((err) => {
			res.send(err);
		});
});

// Obtener todos los usuarios
// router.get("/obtenerusuarios", (req, res) => {
// 	ModeloUsuario.find({}, function (docs, err) {
// 		if (!err) {
// 			res.send(docs);
// 		} else {
// 			res.send(err);
// 		}
// 	});
// });

router.get("/obtenerusuarios", (req, res) => {
	ModeloUsuario.find({})
		.then((docs) => {
			res.send(docs);
		})
		.catch((err) => {
			res.send(err);
		});
});

// Obtener data de usuario
// router.post("/obtenerdatausr", (req, res) => {
// 	ModeloUsuario.find({ idusuario: req.params.idusuario })
// 		.then((docs) => {
// 			res.send(docs);
// 		})
// 		.catch((err) => {
// 			res.send(err);
// 		});
// });

// router.post("/obtenerdatausr", (req, res) => {
// 	const { idusuario } = req.body; // Obtener idusuario del cuerpo de la solicitud POST

// 	ModeloUsuario.find({ idusuario: idusuario }) // Utilizar el idusuario obtenido del cuerpo de la solicitud
// 		.then((docs) => {
// 			res.send(docs);
// 		})
// 		.catch((err) => {
// 			res.send(err);
// 		});
// });

router.post("/obtenerdatausr", (req, res) => {
	const idusuario = req.body.idusuario; // Acceder al valor de idusuario desde req.body

	ModeloUsuario.find({ idusuario: idusuario })
		.then((docs) => {
			res.send(docs);
		})
		.catch((err) => {
			res.send(err);
		});
});

// Agregar actualizar usuario como ruta
router.post("/actualizarusuario", (req, res) => {
	ModeloUsuario.findOneAndUpdate(
		{ idusuario: req.body.idusuario },
		{
			nombre: req.body.nombre,
			email: req.body.email,
			telefono: req.body.telefono,
		}
		// (err) => {
		// 	if (!err) {
		// 		res.send("Usuario exitado");
		// 	} else {
		// 		res.send(err);
		// 	}
		// }
	)
		.then(() => {
			res.send("Usuario exitado");
		})
		.catch((err) => {
			res.send(err);
		});
});

// Agregar ruta de borrar usuario
router.post("/borrarusuario", (req, res) => {
	ModeloUsuario.findOneAndDelete({ idusuario: req.body.idusuario })
		.then(() => {
			res.send("Usuario desfallecido");
		})
		.catch((err) => {
			res.send(err);
		});
});
