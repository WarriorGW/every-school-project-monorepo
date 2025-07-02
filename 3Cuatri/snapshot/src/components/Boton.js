import React from "react";

export default function Boton({ textoBoton, idBoton, valorBoton, clickBoton }) {
	return (
		<div>
			<button id={idBoton} value={valorBoton} onClick={clickBoton}>
				{textoBoton}
			</button>
		</div>
	);
}
