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
import "./pagination.css";

function Tables({ tableName }) {
	const [allTableData, setAllTableData] = useState([]); // Estado para todos los datos
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(10); // Cantidad de elementos por página

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`${URL}/${tableName}`);
				console.log(response.data);
				setAllTableData(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, [tableName]);

	// Función para obtener los datos de la página actual
	const getCurrentPageData = () => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return allTableData.slice(startIndex, endIndex);
	};

	const totalPages = Math.ceil(allTableData.length / itemsPerPage);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

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
					{getCurrentPageData().map((value, index) => {
						const time = new Date(value.timestamp).toLocaleString();
						return (
							<TableRow key={index}>
								<TableCell className="text-center">{value.id}</TableCell>
								<TableCell className="text-center">{value.value}</TableCell>
								<TableCell className="text-center">{time}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
			{/* Controles de paginación */}
			<div className="pagination">
				<button
					disabled={currentPage === 1}
					onClick={() => handlePageChange(currentPage - 1)}
				>
					Previous
				</button>
				<span>{currentPage}</span>
				<button
					disabled={currentPage === totalPages}
					onClick={() => handlePageChange(currentPage + 1)}
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default Tables;
