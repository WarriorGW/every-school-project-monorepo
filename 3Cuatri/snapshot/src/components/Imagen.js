import React from "react";
import "./ImagenStyle.css";
// import PropTypes from "prop-types";

export default function Imagen({ nomImage, textoImagen }) {
	return (
		<div>
			<img src={nomImage} alt="Logo" />
			<p>{textoImagen}</p>
		</div>
	);
}

// Imagen.propTypes = {
// 	nomImage: PropTypes.string.isRequired,
// 	textoImagen: PropTypes.string.isRequired,
// };
