const dogs = async (req, res) => {
	const response = await fetch("https://dog.ceo/api/breeds/image/random");
	const data = await response.json();
	res.send(data);
};

module.exports = dogs;
