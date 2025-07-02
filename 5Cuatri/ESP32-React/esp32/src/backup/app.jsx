import {
	sendMessage,
	connectWebSocket,
	getMessage,
	getConnectionStatus,
} from "./libs/esp32";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [isConnected, setIsConnected] = useState(false);
	const [message, setMessage] = useState("");

	useEffect(() => {
		const fetchConnectionStatus = () => {
			const status = getConnectionStatus();
			setIsConnected(status);
		};
		const fetchMessage = () => {
			const msg = getMessage();
			setMessage(msg);
		};
		const interval = setInterval(fetchConnectionStatus, 500);
		const interval2 = setInterval(fetchMessage, 50);
		return () => {
			clearInterval(interval);
			clearInterval(interval2);
		};
	}, []);

	const handleConnect = () => {
		connectWebSocket();
	};

	return (
		<div className="App">
			<h3>{message}</h3>
			<header className="App-header">
				<h1>Control de LEDs ESP32</h1>
				{isConnected ? (
					<div>
						<button onClick={() => sendMessage("encender1")}>
							Encender LED 1
						</button>
						<button onClick={() => sendMessage("apagar1")}>Apagar LED 1</button>
						<button onClick={() => sendMessage("encender2")}>
							Encender LED 2
						</button>
						<button onClick={() => sendMessage("apagar2")}>Apagar LED 2</button>
					</div>
				) : (
					<button onClick={handleConnect}>Conectar</button>
				)}
				<div>{message}</div>
			</header>
		</div>
	);
}

export default App;
