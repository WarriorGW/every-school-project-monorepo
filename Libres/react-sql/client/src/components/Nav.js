import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<div>
			<h1>React MySQL</h1>
			<ul>
				<li>
					<Link to="/">Casita uwu</Link>
				</li>
				<li>
					<Link to="/nuevo">Crear nueva</Link>
				</li>
			</ul>
		</div>
	);
}

export default Nav;
