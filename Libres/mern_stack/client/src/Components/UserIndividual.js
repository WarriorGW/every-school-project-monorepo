import React, { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// Instalar aos con npm install aos, es para darle animacion bonita cuando sale uwu
import AOS from "aos";
import "aos/dist/aos.css";
// Instalar con npm install sweetalert2 para un mejor mensaje de alerta(en adduser)

function UserIndividual({ usuario }) {
	const navegar = useNavigate();

	// Para animacion con bajar scroll

	useEffect(() => {
		AOS.init();
	}, []);

	// Funcion para borrar el usuario
	function borrarusuario(idusuario) {
		axios
			.post("/api/usuario/borrarusuario", { idusuario: idusuario })
			.then((res) => {
				console.log(res.data);
				alert(res.data);
				navegar(0);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-6 offset-3" data-aos="flip-right">
					<ul className="list-group">
						<li className="list-group-item">{usuario.idusuario}</li>
						<li className="list-group-item">{usuario.nombre}</li>
						<li className="list-group-item">{usuario.email}</li>
						<li className="list-group-item">{usuario.telefono}</li>
					</ul>
					<br />
					<Link to={`/editarusuario/${usuario.idusuario}`}>
						<li className="btn btn-success">Editar</li>
					</Link>
					&nbsp;
					<button
						className="btn btn-danger"
						onClick={() => {
							borrarusuario(usuario.idusuario);
						}}
					>
						Borrar
					</button>
					<hr className="mt-4"></hr>
				</div>
			</div>
		</div>
	);
}

export default UserIndividual;
