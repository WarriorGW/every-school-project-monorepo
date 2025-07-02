import React, { useEffect, useState } from "react";
import axios from "axios";
import UserIndividual from "./UserIndividual";

function ListUsers() {
	const [datauser, setdatauser] = useState([]);

	useEffect(() => {
		axios
			.get("/api/usuario/obtenerusuarios")
			.then((res) => {
				console.log(res.data);
				setdatauser(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// Mapear lista de usuarios en objeto usuario

	const listausuarios = datauser.map((usuario) => {
		return (
			<div>
				<UserIndividual usuario={usuario} />
			</div>
		);
	});

	return (
		<div>
			<h2>Lista de usuarios</h2>
			{listausuarios}
		</div>
	);
}

export default ListUsers;
