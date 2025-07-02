let isWarrior = 1;
let URL = "";

let switchURL = 2;
let wsURL = "";

switch (isWarrior) {
	case 1:
		URL = "http://192.168.195.52:4000/api";
		break;
	case 2:
		URL = "http://192.168.1.68:4000/api";
		break;
	default:
		URL = "http://localhost:4000/api";
		break;
}

switch (switchURL) {
	case 1:
		wsURL = "ws://192.168.195.163:80"; // Mi esp32 en Warrior
		break;
	case 2:
		wsURL = "ws://192.168.195.1:80"; // es32 de chava en Warrior
}

export { URL, wsURL };
