import { wsURL } from "../config/config";

let connection = null;
let message = "";
let connectionStatusCallback = null;
let messageCallback = null;

export const connectWebSocket = () => {
	const ws = new WebSocket(wsURL);
	ws.onerror = (error) => {
		console.error("Error:", error);
		if (connectionStatusCallback) {
			connectionStatusCallback(false);
		}
	};
	ws.onopen = () => {
		connection = ws;
		if (connectionStatusCallback) {
			connectionStatusCallback(true);
		}
		console.log("Conexión establecida");
	};
	ws.onmessage = (event) => {
		console.log("Recibido:", event.data);
		message = event.data;
		if (messageCallback) {
			messageCallback(message);
		}
	};
	ws.onclose = () => {
		console.log("Conexión cerrada");
		connection = null;
		if (connectionStatusCallback) {
			connectionStatusCallback(false);
		}
	};
};

export const sendMessage = (command) => {
	if (connection) {
		connection.send(command);
	} else {
		console.error("WebSocket no está conectado");
	}
};

export const registerConnectionStatusCallback = (callback) => {
	connectionStatusCallback = callback;
};

export const registerMessageCallback = (callback) => {
	messageCallback = callback;
};
