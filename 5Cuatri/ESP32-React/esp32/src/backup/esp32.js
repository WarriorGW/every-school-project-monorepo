let connection = null;
let message = "";

export const connectWebSocket = () => {
	const ws = new WebSocket("ws://192.168.195.163:80");
	ws.onopen = () => {
		connection = ws;
		console.log("Conexión establecida");
	};
	ws.onmessage = (event) => {
		console.log("Mensaje recibido:", event.data);
		message = event.data;
	};
	ws.onclose = () => {
		console.log("Conexión cerrada");
		connection = null;
	};
};

export const sendMessage = (command) => {
	if (connection) {
		connection.send(command);
	} else {
		console.error("WebSocket no está conectado");
	}
};

export const getConnectionStatus = () => {
	// console.log(connection !== null);
	return connection !== null;
};

export const getMessage = () => {
	return message;
};
