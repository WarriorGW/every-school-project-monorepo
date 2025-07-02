import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";

function EditUsers() {
	const params = useParams();

	// Hooks de react

	const [nombre, setNombre] = useState("");
	const [email, setEmail] = useState("");
	const [telefono, setTelefono] = useState("");

	// Para volver atras al index
	const navegar = useNavigate();

	useEffect(() => {
		axios
			.post("/api/usuario/obtenerdatausr", { idusuario: params.idusuario })
			.then((res) => {
				console.log(res.data[0]);
				console.log(res.data);
				const datausuario = res.data[0];
				setNombre(datausuario.nombre);
				setEmail(datausuario.email);
				setTelefono(datausuario.telefono);
			});
	}, []);

	// Crear la funcion de editar usuario
	function editarUsuario() {
		// Nuevo objeto para actualizar el usuario
		const actusr = {
			nombre: nombre,
			email: email,
			telefono: telefono,
			idusuario: params.idusuario,
		};

		// Hacer la peticion con axios

		axios
			.post("/api/usuario/actualizarusuario", actusr)
			.then((res) => {
				console.log(res.data);
				Swal.fire("Felicidades", "Usuario actualizado exitadamente");
				navegar("/");
			})
			.then((err) => {
				console.log(err);
			});
	}

	return (
		<div className="container">
			<div className="row">
				<h2 className="mt-4">Editar usuario</h2>
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

					<button onClick={editarUsuario} className="btn btn-success">
						Guardar cambios
					</button>
				</div>
			</div>
		</div>
	);
}

export default EditUsers;
