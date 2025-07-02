const { Router } = require("express");

const pokedex = require("../controller/pokemon");

const routePokemon = Router();

routePokemon.get("/", pokedex);

module.exports = routePokemon;
