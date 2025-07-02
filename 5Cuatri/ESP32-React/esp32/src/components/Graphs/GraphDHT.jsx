import axios from "axios";
import { URL } from "../../config/config";
import { useEffect, useState } from "react";
import { AreaChart } from "@tremor/react";

function Graph() {
	const [chartData, setChartData] = useState();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const responses = await Promise.all([
					axios.get(URL + "/humidity"),
					axios.get(URL + "/temperature"),
				]);

				const data = responses.reduce((acc, response) => {
					const category = response.config.url.substring(
						response.config.url.lastIndexOf("/") + 1
					);
					const newData = response.data.map((item) => ({
						date: new Date(item.timestamp).toLocaleString(),
						value: item.value,
					}));
					return { ...acc, [category]: newData };
				}, {});

				// Combinar los datos en un solo arreglo
				const allDates = Object.values(data).flatMap((categoryData) =>
					categoryData.map((dataPoint) => dataPoint.date)
				);
				const uniqueDates = [...new Set(allDates)];

				const combinedData = uniqueDates.map((date) => {
					const combinedObject = { date: date };
					Object.keys(data).forEach((category) => {
						const dataForCategory = data[category].find(
							(dataPoint) => dataPoint.date === date
						);
						if (dataForCategory) {
							combinedObject[category] = dataForCategory.value;
						}
					});
					return combinedObject;
				});

				console.log(combinedData);

				setChartData(combinedData);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	const dataFormatter = (number) =>
		`${Intl.NumberFormat("us").format(number).toString()}`;

	return (
		<AreaChart
			className="mt-4 h-72"
			data={chartData}
			index="date"
			valueFormatter={dataFormatter}
			yAxisWidth={50}
			categories={["humidity", "temperature"]}
			colors={["indigo", "red"]}
			onValueChange={(value) => {
				console.log(value);
			}}
			showAnimation
			connectNulls
			enableLegendSlider
			allowDecimals
		/>
	);
}

export default Graph;
