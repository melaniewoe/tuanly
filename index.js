const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({ hi: 'ugly tuan who breaks my heart all the time :('});
});

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.listen(port);