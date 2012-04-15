// An example of how to use the WunderNode client.
//
// By Andrew Anderson
// twitter: @aplussa
// git: www.github.com/evalcrux

// Imports

var WunderNodeClient = require("./WunderNodeClient", true);

// Definitions

// Replace this with your API KEY
var apikey = "27c9a5dc8f98410f";

// Set to true if you want to see all sort of nasty output on stdout.
var debug = false;

// Create Client
var wunder = new WunderNodeClient(apikey,debug);

var express = require('express');

var app = express.createServer();


app.get('/', function(req, res) {
	res.end('Hello from wundernode!');
});


app.get('/conditions', function(req, res){
	wunder.conditions(function(err, obj) {
		if (err){
			console.log('errors: ' + err);
		}
		res.end(obj);
	}, req.query.loc);
});

app.get('/almanac', function(req, res){
	wunder.almanac(function(err, obj) {
		res.end(obj);
	},req.query.loc);
});


app.get('/forecast', function(req, res){
	wunder.forecast(function(err, obj) {
		res.end(obj);
	},req.query.loc);
});

app.get('/hourly', function(req, res){
	wunder.hourly(function(err, obj) {
		res.end(obj);
	},req.query.loc);
});

app.get('/hourly7day', function(req, res){
	wunder.hourly7day(function(err, obj) {
		res.end(obj);
	},req.query.loc);
});

app.get('/hourly10day', function(req, res){
	wunder.hourly10day(function(err, obj) {
		res.end(obj);
	},req.query.loc);
});

app.get('/yesterday', function(req, res){
	wunder.yesterday(function(err, obj) {
		res.end(obj);
	},req.query.loc);
});

app.get('/satellite', function(req, res){
	wunder.satellite(function(err, obj) {
		res.end(obj);
	},req.query.loc);
});

app.listen(3000);
