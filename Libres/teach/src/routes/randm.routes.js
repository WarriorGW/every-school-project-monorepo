const { Router } = require("express");

const randm = require("../controller/randm.controller");

const routeRandM = Router();

routeRandM.get("/", randm);

module.exports = routeRandM;
