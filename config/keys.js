if (process.env.NODE_ENV === 'production') {
	// retrun prod keys
	module.exports = require('./prod');
} else {
	// return dev keys
	module.exports = require('./dev');
}