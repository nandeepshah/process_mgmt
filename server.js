const express = require('express');
const { logger } = require('./middleware/logger');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
const userRouter = require('./routes/userRoutes');
const projectRouter = require('./routes/projectRoutes');
//********************************************
//***************DATABASE CONNECTION**********
//********************************************
const mongoose = require('mongoose');
mongoose.connect(
	'mongodb+srv://nandeepshah85:GgdEly5yBJumU5z1@cluster0.bpjbwaz.mongodb.net/FANUC?retryWrites=true&w=majority'
);
mongoose.connection.once('open', () => {
	console.log('Connected to database');
});
mongoose.connection.on('error', () => {
	console.error.bind(`Error connecting to database `);
});
//********************************************
//********************************************
//********************************************
const morgan = require('morgan');
app.use(morgan('tiny'));
//********************************************
//********************************************
//********************************************
app.use(express.static('public')); //sends static files
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// for parsing multipart/form-data
app.use(upload.array());

//********************************************
//********************************************
//********************************************
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'home.html'));
});
//********************************************
//********************************************
//********************************************
app.use('/users', userRouter);
//********************************************
//********************************************
//********************************************
//********************************************
//********************************************
//********************************************
app.use('/welcome', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'welcome.html'));
});
//********************************************
//********************************************
//********************************************
//********************************************
//********************************************
//********************************************
app.use('/projects', projectRouter);
//********************************************
//********************************************
//********************************************
//********************************************
//********************************************
//********************************************
app.get('*', (req, res) => {
	res.status(404);
	res.sendFile(path.join(__dirname, 'views', '404.html'));
});
//********************************************
//********************************************
//********************************************
//********************************************
//********************************************
//********************************************
app.listen(3000);
