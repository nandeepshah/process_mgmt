const getallUsers = (req, res) => {
	res.send('GET all users now');
};
const getUser = (req, res) => {
	res.send('GET a user');
};
const postUser = (req, res) => {
	res.send('POST all users');
};

module.exports = {
	getUser,
	getallUsers,
	postUser,
};
