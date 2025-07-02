import {
	connectWebSocket,
	registerConnectionStatusCallback,
	registerMessageCallback,
} from "./libs/esp32";
import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
	const [isConnected, setIsConnected] = useState(true);
	const [message, setMessage] = useState("");

	useEffect(() => {
		registerConnectionStatusCallback(setIsConnected);
		registerMessageCallback(setMessage);

		return () => {
			registerConnectionStatusCallback(null);
			registerMessageCallback(null);
		};
	}, []);

	const handleConnect = () => {
		connectWebSocket();
	};

	return (
		<div className="container flex flex-col self-center items-center justify-center text-center">
			<header className="w-full">
				<h1>Control de ESP32</h1>
				<div className="flex justify-center items-center">
					<div className="message my-5">{message}</div>
				</div>
				{isConnected ? (
					<Routes>
						<Route index path="/*" element={<Dashboard message={message} />} />
					</Routes>
				) : (
					<button className="connect" onClick={handleConnect}>
						Conectar
					</button>
				)}
			</header>
		</div>
	);
}

export default App;
