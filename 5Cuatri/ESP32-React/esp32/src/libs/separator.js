function parseData(dataString = "0$0$0$0$0") {
	const dataArray = dataString.split("$");
	if (dataArray.length !== 5) {
		console.error("La cadena de datos no tiene el formato esperado.");
		return "0$0$0$0$0"; // Valor predeterminado
	}

	const parsedData = {
		light: parseInt(dataArray[0]),
		motion: parseInt(dataArray[1]),
		proximity: parseInt(dataArray[2]),
		humidity: parseFloat(dataArray[3]),
		temperature: parseFloat(dataArray[4]),
	};

	if (Object.values(parsedData).some((value) => isNaN(value))) {
		console.error("Algunos valores de los sensores no son números válidos.");
		return "0$0$0$0$0"; // Valor predeterminado
	}

	return parsedData;
}

export { parseData };
