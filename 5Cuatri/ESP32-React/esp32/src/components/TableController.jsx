import { Select, SelectItem } from "@tremor/react";
import { useState } from "react";
import {
	RiDropFill,
	RiExpandWidthFill,
	RiSunFill,
	RiThermometerFill,
	RiWalkFill,
} from "@remixicon/react";
import Tables from "./Tables";

function TableController() {
	const [value, setValue] = useState("");

	const handleChange = (index) => {
		setValue(index);
		console.log(index);
	};

	return (
		<>
			<div className="mx-auto max-w-xs">
				<label
					htmlFor="tables"
					className="text-tremor-default text-tremor-content dark:text-dark-tremor-content"
				>
					Selecciona la tabla
				</label>
				<Select
					id="tables"
					value={value}
					onChange={handleChange}
					className="mt-2"
				>
					<SelectItem value="1" icon={RiSunFill}>
						Luz
					</SelectItem>
					<SelectItem value="2" icon={RiDropFill}>
						Humedad
					</SelectItem>
					<SelectItem value="3" icon={RiWalkFill}>
						Movimiento
					</SelectItem>
					<SelectItem value="4" icon={RiExpandWidthFill}>
						Proximidad
					</SelectItem>
					<SelectItem value="5" icon={RiThermometerFill}>
						Temperatura
					</SelectItem>
				</Select>
			</div>
			{value === "1" && <Tables tableName="light" />}
			{value === "2" && <Tables tableName="humidity" />}
			{value === "3" && <Tables tableName="motion" />}
			{value === "4" && <Tables tableName="proximity" />}
			{value === "5" && <Tables tableName="temperature" />}
		</>
	);
}

export default TableController;
