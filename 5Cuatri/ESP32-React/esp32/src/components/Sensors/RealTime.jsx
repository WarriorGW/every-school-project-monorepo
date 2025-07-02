import { Divider, LineChart } from "@tremor/react";
import { useEffect, useState } from "react";

function RealTime({ data }) {
	const [chartData, setChartData] = useState([]);

	useEffect(() => {
		if (data) {
			const timestamp = new Date().getTime();
			setChartData((prevData) => [...prevData, { ...data, date: timestamp }]);
		}
	}, [data]);

	const dataFormatter = (number) =>
		`${Intl.NumberFormat("us").format(number).toString()}`;

	return (
		<>
			<LineChart
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
			<Divider />
			<LineChart
				className="mt-4 h-72"
				data={chartData}
				index="date"
				valueFormatter={dataFormatter}
				yAxisWidth={50}
				categories={["light", "motion", "proximity"]}
				colors={["yellow", "green", "blue"]}
				onValueChange={(value) => {
					console.log(value);
				}}
				showAnimation
				connectNulls
				enableLegendSlider
				allowDecimals
			/>
		</>
	);
}

export default RealTime;
