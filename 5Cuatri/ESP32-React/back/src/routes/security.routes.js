const Router = require("express");
const { getAllfol, postFol } = require("../controller/security.controller.js");
const routerFol = Router();

routerFol.get("/:tabla", getAllfol);
routerFol.post("/:tabla", postFol);

module.exports = routerFol;
