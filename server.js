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
mongoose.connect('mongodb://localhost/fanuc');
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
	res.send('<h1>Home</h1>');
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
//TODO move these to project create
app.get('/form', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'subscribe-form.html'));
});
app.post('/form', (req, res) => {
	console.log(req.body);
	console.log('redirecting...');
	res.redirect('/');
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
