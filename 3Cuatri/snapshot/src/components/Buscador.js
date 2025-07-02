import React from "react";
import Boton from "./Boton";
// import ImagenWProps from "./ImagenWProps";

export default function Buscador(props) {
	return (
		<div className="contenedor busqueda">
			<input
				type="text"
				onChange={props.changeInput}
				value={props.valueInput}
				name="buscador"
				id="buscador"
				placeholder="Buscar..."
			></input>

			<Boton textoBoton="Eliminar" idBoton={"eliminador"} />
			<Boton
				textoBoton="Buscar"
				idBoton={"nose"}
				clickBoton={props.clickedBuscador}
			/>
		</div>
	);
}

let $botonEliminar = document.getElementById("eliminador");
console.log($botonEliminar);

document.addEventListener("keyup", (e) => {
	e.target.matches("#buscador");
	console.log(e.target.value);
});

document.addEventListener("click", (e) => {
	if (e.target.matches("#eliminador")) {
		borrarTexto();
		console.log("Click en eliminador");
	}
});

// function eventBuscador() {
// 	eventBuscador.target.matches("#buscador");
// 	console.log(eventBuscador.target.value);
// }

// document.addEventListener("keyup", eventBuscador());

function borrarTexto() {
	document.getElementById("buscador").value = "";
}

//let isClick = document.addEventListener("click", (ifclick) => {
// if (ifclick.target.matches("#eliminador")) {
// console.log("wenas, cliqueaste el de eliminar -w- ");
// e.target.value = "";
// console.log("Sin nada que hacer");
//}
//});

//let isKeyup = document.addEventListener("keyup", (e) => {
// e.target.matches("#buscador");
// console.log(e.target.value);
// if (e.target.matches("#buscador")) {
// 	document.querySelectorAll(".ariculos").forEach((fruta) => {
// 		fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
// 			? fruta.classList.remove("filtro")
// 			: fruta.classList.add("filtro");
// 	});
// }
//});
