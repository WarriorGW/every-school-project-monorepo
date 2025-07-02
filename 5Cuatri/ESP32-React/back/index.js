require("dotenv").config();
const express = require("express");
const cors = require("cors");

const routerFol = require("./src/routes/security.routes.js");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", routerFol);

app.listen(process.env.PORT, () => {
	console.log(`Corriendose en: http://localhost:${process.env.PORT}`);
});
