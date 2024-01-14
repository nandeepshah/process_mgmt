const getallProjects = (req, res) => {
	res.send('GET all Projects now');
};
const getProject = (req, res) => {
	res.send(`GET a Project with id ${req.params.id}`);
};
const postProject = (req, res) => {
	res.send('POST a Project');
};

module.exports = { getProject, getallProjects, postProject };
