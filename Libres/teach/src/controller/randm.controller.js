const randm = async (req, res) => {
	const response = await fetch("https://rickandmortyapi.com/api/character/1");
	const data = await response.json();
	res.send(data);
};

module.exports = randm;
