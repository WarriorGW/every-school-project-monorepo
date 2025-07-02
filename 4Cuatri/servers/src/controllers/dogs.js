export const getDogs = async (req, res) => {
	const response = await fetch("https://dog.ceo/api/breeds/image/random");
	const dogs = await response.json();
	res.send(dogs);
};
