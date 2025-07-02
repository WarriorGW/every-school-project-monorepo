import express from "express";
import cors from "cors";
import multer from "multer";
import csvToJson from "convert-csv-to-json";

let userData: Array<Record<string, string>> = [];

const app = express();
const port = process.env.PORT ?? 3000;

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use(cors());

app.post("/api/files", upload.single("file"), async (req, res) => {
	const { file } = req;
	if (!file) {
		return res.status(500).json({ message: "File is required" });
	}
	if (file.mimetype !== "text/csv") {
		return res.status(500).json({ message: "Invalid file type" });
	}
	let json: Array<Record<string, string>> = [];
	try {
		const csv = Buffer.from(file.buffer).toString("utf-8");
		console.log(csv);
		const json = csvToJson.csvStringToJson(csv);
		userData = json;
	} catch (error) {
		return res.status(500).json({ message: "Error parsing the file" });
	}
	return res
		.status(200)
		.json({ data: userData, message: "File uploaded successfully" });
});

app.get("/api/users", (req, res) => {
	res.status(200).json({ data: [] });
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
