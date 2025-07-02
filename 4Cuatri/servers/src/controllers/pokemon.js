export const getPoke = async (req, res) => {
	const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
	const poke = await response.json();
	res.send(poke);
};
