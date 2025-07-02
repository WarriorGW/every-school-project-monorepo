const { Router } = require("express");

const dogs = require("../controller/dogs");

const routeDogs = Router();

routeDogs.get("/", dogs);

module.exports = routeDogs;
