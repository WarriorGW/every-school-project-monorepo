import React from "react";
import "./ImagenWPropsStyle.css";
// import PropTypes from "prop-types";

export default function Imagen(props) {
	return (
		<div className="cajitas color-fondo">
			<img
				className="img-catalogo color-fondo"
				src={require(`../img/galeria-${props.nomImage}.png`)}
				alt={`Imagen de ${props.nomImage}`}
			/>
			<p className="descripcion color-fondo">{props.textoImagen}</p>
		</div>
	);
}

// Imagen.propTypes = {
// 	nomImage: PropTypes.string.isRequired,
// 	textoImagen: PropTypes.string.isRequired,
// };
