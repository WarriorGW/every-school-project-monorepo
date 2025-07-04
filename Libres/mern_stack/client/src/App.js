import "./App.css";
import AddUsers from "./Components/AddUser";
import EditUsers from "./Components/EditUser";
import ListUsers from "./Components/ListUsers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<a className="navbar-brand" href="/">
						Wenas desde App uwu
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="/">
									Inicio
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="agregarusuario">
									Agregar usuario
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			{/* Instalar BrowserRouter con npm install react-router-dom */}
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ListUsers />} exact></Route>
					<Route path="/agregarusuario" element={<AddUsers />} exact></Route>
					<Route
						path="/editarusuario/:idusuario"
						element={<EditUsers />}
						exact
					></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
