export const getPersonajes = async (req, res) => {
	const response = await fetch(
		"https://rickandmortyapi.com/api/character/1,183"
	);
	const personajes = await response.json();
	res.send(personajes);
};
