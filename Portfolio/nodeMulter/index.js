const express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
	filename: (req, file, cb) => {
		cb(null, `${Date.now()}-${file.originalname}`);
	},
});

const upload = multer({ storage: storage });

const app = express();

app.post("/image/single", upload.single("imagenuwu"), (req, res) => {
	console.log(req.file);
	res.send("termina");
});

app.post("/image/multi", upload.array("varias", 5), (req, res) => {
	console.log(req.files);
	res.send("termina multi");
});

app.listen(3000, () => console.log("Server is running on port 3000"));
