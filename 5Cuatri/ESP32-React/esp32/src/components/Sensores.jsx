import { useState, useEffect } from "react";
import { parseData } from "../libs/separator";
import { URL } from "../config/config";
import axios from "axios";
import Termometro from "./Sensors/Termometro";
import RealTime from "./Sensors/RealTime";
import BinaryBtn from "./Sensors/BinaryBtn";

function Sensores({ message }) {
	const [sensores, setSensores] = useState({
		light: 0,
		motion: 0,
		proximity: 0,
		humidity: 0,
		temperature: 0,
	});

	useEffect(() => {
		const processData = (data) => {
			if (data === 1) {
				data = data * 100;
			}
			return data;
		};
		const sendData = async (tableName, data) => {
			const processedData = processData(data);
			const response = await axios.post(`${URL}/${tableName}`, processedData);
			console.log(response);
		};

		const data = parseData(message);

		// Verificar qué valores han cambiado
		Object.keys(data).forEach((key) => {
			if (data[key] !== sensores[key]) {
				console.log(`El valor de ${key} ha cambiado a ${data[key]}`);
				sendData(key, { value: data[key] });
			}
		});

		setSensores(data);
	}, [message]);

	return (
		<div>
			<div className="flex">
				<Termometro temperatura={sensores.humidity} textoAbajo="Humedad" />
				<Termometro
					temperatura={sensores.temperature}
					textoAbajo="Temperatura"
				/>
				<div className="flex flex-col m-5">
					<p>Luz: {sensores.light}</p>
					<BinaryBtn value={sensores.light} />
					<p>Movimiento: {sensores.motion}</p>
					<BinaryBtn value={sensores.motion} />
				</div>
				<div className="m-5">
					<p>Proximidad: {sensores.proximity}</p>
					<BinaryBtn value={sensores.proximity} />
				</div>
			</div>
			<RealTime data={sensores} />
		</div>
	);
}

export default Sensores;
