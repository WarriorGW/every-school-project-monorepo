import React from "react";
import GraphBina from "./Graphs/GraphBina";
import GraphDHT from "./Graphs/GraphDHT";
import { Divider } from "@tremor/react";

function Graphs() {
	return (
		<div>
			<GraphDHT />
			<Divider />
			<GraphBina />
		</div>
	);
}

export default Graphs;
