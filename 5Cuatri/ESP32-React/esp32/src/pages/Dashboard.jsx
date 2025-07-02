import React, { useState } from "react";
import {
	Card,
	TabGroup,
	Tab,
	TabList,
	TabPanels,
	TabPanel,
} from "@tremor/react";
import TableController from "../components/TableController";
import Sensores from "../components/Sensores";
import Graphs from "../components/Graphs";

function Dashboard({ message }) {
	const [indexado, setIndexado] = useState(0);

	const handleChange = (index) => {
		setIndexado(index);
		console.log(index);
	};
	return (
		<div>
			{/* <TurnLED /> */}
			<Card className="mx-auto max-w-4xl mb-10">
				<TabGroup onIndexChange={handleChange} index={indexado}>
					<TabList variant="solid" className="self-center">
						<Tab value="1">Sensores</Tab>
						<Tab value="2">Gráfica</Tab>
						<Tab value="3">Tablas</Tab>
					</TabList>
					<TabPanels>
						<TabPanel value="1">
							{indexado === 0 && <Sensores message={message} />}
						</TabPanel>
						<TabPanel value="2">{indexado === 1 && <Graphs />}</TabPanel>
						<TabPanel value="3">
							{indexado === 2 && <TableController />}
						</TabPanel>
					</TabPanels>
				</TabGroup>
			</Card>
		</div>
	);
}

export default Dashboard;
