import React, { useState } from "react";

// Se instalo Uniqid con npm install uniqid, para que uniqid asigne un valor automatico a isusuario
import uniqid from "uniqid";

// Se instalo Axios con npm install axios
// Ahora hay que importarlo
import axios from "axios";

// Esta es la importacion de la libreria de alerta mas bonita uwu
import Swal from "sweetalert2";

// Importar el navigate
import { useNavigate } from "react-router-dom";

function AddUsers() {
	// Hooks de react

	const [nombre, setNombre] = useState();
	const [email, setEmail] = useState();
	const [telefono, setTelefono] = useState();

	// Para volver atras al index
	const navegar = useNavigate();

	function agregarUsuario() {
		var usuario = {
			nombre: nombre,
			email: email,
			telefono: telefono,
			idusuario: uniqid(),
		};
		console.log(usuario);

		// Para hacer esto se agrego: "proxy": "http://localhost:5000/", despues de la penultima llave de package.json de react
		axios
			.post("/api/usuario/agregarusuario", usuario)
			.then((res) => {
				//alert(res.data);
				Swal.fire("Felicidades", "El usuario se creo exitadamente");
				navegar("/");
			})
			.then((err) => {
				console.log(err);
			});
	}

	return (
		<div className="container">
			<div className="row">
				<h2 className="mt-4">Crear un nuevo usuario</h2>
			</div>
			<div className="row">
				<div className="col-sm-6 offset-3">
					<div className="mb-3">
						<label htmlFor="nombre" className="form-label">
							Nombre
						</label>
						<input
							type="text"
							className="form-control"
							value={nombre}
							onChange={(e) => {
								setNombre(e.target.value);
							}}
						></input>
					</div>

					<div className="mb-3">
						<label htmlFor="email" className="form-label">
							E-mail
						</label>
						<input
							type="email"
							className="form-control"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						></input>
					</div>

					<div className="mb-3">
						<label htmlFor="telefono" className="form-label">
							Telefono
						</label>
						<input
							type="text"
							className="form-control"
							value={telefono}
							onChange={(e) => {
								setTelefono(e.target.value);
							}}
						></input>
					</div>

					<button onClick={agregarUsuario} className="btn btn-success">
						Guardar usuario
					</button>
				</div>
			</div>
		</div>
	);
}

export default AddUsers;
