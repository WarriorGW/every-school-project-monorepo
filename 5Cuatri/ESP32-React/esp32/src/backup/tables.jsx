import axios from "axios";
import { URL } from "../config/config";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
} from "@tremor/react";
import { useEffect, useState } from "react";

function Tables({ tableName }) {
	const [tableData, setTableData] = useState([]);

	const fetchData = async () => {
		try {
			const response = await axios.get(`${URL}/${tableName}`);
			console.log(response.data);
			setTableData(response.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="mx-auto max-w-2xl">
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell className="text-center">#</TableHeaderCell>
						<TableHeaderCell className="text-center">value</TableHeaderCell>
						<TableHeaderCell className="text-center">timestamp</TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{tableData.map((value, index) => (
						<TableRow key={index}>
							<TableCell className="text-center">{value.id}</TableCell>
							<TableCell className="text-center">{value.value}</TableCell>
							<TableCell className="text-center">{value.timestamp}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}

export default Tables;
