const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

const app = express();

mongoose.connect(keys.mongoURI);

require('./routes/authRoutes')(app); 

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.listen(port);