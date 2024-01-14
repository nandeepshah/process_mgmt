const mongoose = require('mongoose');

// Define the schema
const projectSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	customer: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	startDate: {
		type: Date,
		required: true,
	},
	endDate: {
		type: Date,
		required: true,
	},
	// You can add more fields as needed for your project
});

// Create the model
const Project = mongoose.model('Project', projectSchema);

// Export the model for use in other files
module.exports = Project;
