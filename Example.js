/**
 * 
 */

// An example of how to use the WunderNode client.
//
// By Andrew Anderson
// git: www.github.com/evalcrux
// Changes by lgriffin include defintion of country and city
// Imports

var WunderNodeClient = require("wundernode", true);
var URL = require('url');
// Definitions

// Replace this with your API KEY
var apikey = "27c9a5dc8f98410f";
var country = "IE";
var city = "Waterford";

// Set to true if you want to see all sort of nasty output on stdout.
var debug = true;

// Create Client
var wunder = new WunderNodeClient(apikey,debug);

var express = require('express');

var app = express();


app.get('/', function(req, res) {
        res.end('Hello from wundernode!');
});


app.get('/conditions', function(req, res){
    wunder.conditions(req.query.loc, function(err, obj) {
            if (err){
                    console.log('errors: ' + err);
            }
            res.end(obj);
    });
});

app.get('/almanac', function(req, res){
    wunder.almanac(req.query, function(err, obj) {
            res.end(obj);
    });
});

app.get('/forecast', function(req, res){
   console.log('getting forecast for loc: ' + req.query.log); 
   
    wunder.forecast(req.query.loc, function(err, obj) {
            res.end(obj);
    });
});

app.get('/geolookup', function(req, res) {
   var queryData = URL.parse(req.url);
   console.log('finding location for geoloc: ' + JSON.stringify(queryData));
   
   wunder.geolookup(queryData.query, function(err, obj) {
            res.end(obj);
    });
   
});

app.get('/hourly', function(req, res){
    var queryData = URL.parse(req.url);
    wunder.hourly(queryData.query, function(err, obj) {
            res.end(obj);
    });
});

app.get('/hourly7day', function(req, res){
    var queryData = URL.parse(req.url);
    wunder.hourly7day(queryData.query, function(err, obj) {
            res.end(obj);
    });
});

app.get('/hourly10day', function(req, res){
    var queryData = URL.parse(req.url);
    wunder.hourly10day(queryData.query, function(err, obj) {
            res.end(obj);
    });
});

app.get('/yesterday', function(req, res){
    var queryData = URL.parse(req.url);
    wunder.yesterday(queryData.query, function(err, obj) {
            res.end(obj);
    });
});

app.get('/satellite', function(req, res){
    var queryData = URL.parse(req.url);
    wunder.satellite(queryData.query, function(err, obj) {
            res.end(obj);
    });
});

app.get('/foo', function(req, res){
    wunder.foo(req.query.loc, function(err, obj) {
            res.end(obj);
    });
});


app.listen(3000);




