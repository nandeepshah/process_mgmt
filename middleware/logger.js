const logger = (req, res, next) => {
	const date = new Date();
	console.log(`${date.toLocaleString()}\t${req.method}\t${req.url}`);
	next();
};

module.exports = { logger };
