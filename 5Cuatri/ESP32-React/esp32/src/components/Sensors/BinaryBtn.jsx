import React, { useState, useEffect } from "react";

const ColorChanger = ({ value }) => {
	const [color, setColor] = useState("");

	useEffect(() => {
		if (value === 0) {
			setColor("#790000");
		} else if (value === 1) {
			setColor("#00ef03");
		} else {
			setColor("");
		}
	}, [value]);

	return (
		<div
			style={{ backgroundColor: color, width: "100px", height: "100px" }}
			className="rounded-xl m-2 border-4 border-slate-700"
		></div>
	);
};

export default ColorChanger;
