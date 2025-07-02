import { useState, useEffect } from "react";
import "./Termometro.css";

const Termometro = ({ temperatura, textoAbajo }) => {
	const [porcentaje, setPorcentaje] = useState(0);

	useEffect(() => {
		// Calculamos el porcentaje usando una regla de tres
		const nuevoPorcentaje = (temperatura / 80) * 100;
		setPorcentaje(nuevoPorcentaje);
	}, [temperatura]);

	return (
		<div className="termometro-bg">
			<div id="termometer" className="termometro-container">
				<div
					id="temperature"
					className="termometro-barra"
					style={{ height: `${porcentaje}%` }}
				></div>
				<div id="graduations ">
					<ul className="left">
						<li>-80</li>
						<li>-60</li>
						<li>-40</li>
						<li>-20</li>
						<li>-0</li>
					</ul>
				</div>
			</div>
			<div className="text-style">{textoAbajo}</div>
		</div>
	);
};

export default Termometro;
