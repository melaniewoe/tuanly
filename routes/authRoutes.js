const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

module.exports = (app) => {
	app.get('/auth/google', passport.authenticate('google', {
		scope: ['profile', 'email']
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google'));

	app.get('/newuser', (req, res) => {
		new User({googleId: '123', firsName: 'test', lastName: 'lastname'});
		res.send({ hi: 'new user'});
	});

	app.get('/', (req, res) => {
		res.send({ hi: 'test'});
	});

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send(req.user);
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};