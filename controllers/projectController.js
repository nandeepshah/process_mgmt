const Project = require('../models/projects');
const path = require('path');

const getallProjects = (req, res) => {
	console.log(__dirname);
	res.sendFile(path.join(__dirname, '../views', 'project-form.html'));
};
const getProject = (req, res) => {
	res.send(`GET a Project with id ${req.params.id}`);
};
const postProject = async (req, res) => {
	try {
		// Create a new project instance with data from the request body
		const newProject = new Project(req.body);
		// Save the project to the database
		const savedProject = await newProject.save();
		res.status(201).json(savedProject);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = { getProject, getallProjects, postProject };
