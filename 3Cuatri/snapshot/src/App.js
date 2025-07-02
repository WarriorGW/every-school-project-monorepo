import logo from "./img/snapshot.webp";
import "./App.css";
// import Boton from "./components/Boton";
import Imagen from "./components/Imagen";
import ImagenWProps from "./components/ImagenWProps";
import Buscador from "./components/Buscador";
import React, { useState } from "react";
import GaleriaImagenes from "./components/GaleriaImagenes";

export default function App() {
	const [filteredImages, setFilteredImages] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	// const handleSearch = (searchTerm) => {
	// 	console.log("searchTerm:", searchTerm);
	// 	console.log("typeof searchTerm:", typeof searchTerm);
	// 	const filteredImages = GaleriaImagenes.filter((imagen) => {
	// 		const { textoImagen, claveImagen } = imagen;
	// 		return (
	// 			textoImagen.toLowerCase().includes(searchTerm.toLowerCase()) ||
	// 			claveImagen.toLowerCase().includes(searchTerm.toLowerCase())
	// 		);
	// 	});

	const handleSearch = () => {
		const filteredImages = GaleriaImagenes.filter((imagen) => {
			const { textoImagen, claveImagen } = imagen;
			return (
				textoImagen.toLowerCase().includes(searchTerm.toLowerCase()) ||
				claveImagen.toLowerCase().includes(searchTerm.toLowerCase())
			);
		});

		setFilteredImages(filteredImages);
	};

	return (
		<div>
			<div className="contenedor">
				<Imagen nomImage={logo} textoImagen={""} />
			</div>

			<Buscador
				clickedBuscador={() => handleSearch(searchTerm)}
				valueInput={searchTerm}
				changeInput={(e) => setSearchTerm(e.target.value)}
			/>

			<div className="contenedor">
				{/* {GaleriaImagenes.map((imagen) => (
					<ImagenWProps
						key={imagen.claveImagen}
						nomImage={imagen.claveImagen}
						textoImagen={imagen.textoImagen}
					/>
				))} */}

				{filteredImages.map((imagen) => (
					<ImagenWProps
						key={imagen.claveImagen}
						nomImage={imagen.claveImagen}
						textoImagen={imagen.textoImagen}
					/>
				))}
			</div>
		</div>
	);
}
