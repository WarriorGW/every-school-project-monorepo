import { sendMessage } from "../libs/esp32";
function TurnLED() {
	return (
		<>
			<button className="btn" onClick={() => sendMessage("encender1")}>
				Encender
			</button>
			<button className="btn" onClick={() => sendMessage("apagar1")}>
				Apagar
			</button>
		</>
	);
}

export default TurnLED;
