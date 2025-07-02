const pokedex = async (req, res) => {
	const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
	const data = await response.json();
	res.send(data);
};

module.exports = pokedex;
