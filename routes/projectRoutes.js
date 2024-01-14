const express = require('express');
const projectController = require('../controllers/projectController');
const router = express.Router();

router
	.route('/')
	.get(projectController.getallProjects)
	.post(projectController.postProject);

router.route('/create').get(projectController.getProjectCreateForm);

router.route('/:id').get(projectController.getProject);

module.exports = router;
