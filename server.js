var express = require('express');
var app = express();
var mongoose = require('mongoose');

var config = require('./config');
var setupController = require('./controllers/setup');
var searchController = require('./controllers/search');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

mongoose.connect(config.getDbConnectionString());

setupController(app);
searchController(app);

app.listen(port); 