//
// Wunderground API Client for node.js
// Andrew Anderson
// twitter: @_offshore
//
// Changes made by lgriffin
// twitter: @leighgriffin


var request = require('request');
var util = require('util');
var RateLimiter = require('limiter').RateLimiter;
// wunderground has pretty string API rates. limter provides a basic request throttler
var rateCount = 10;
var rateTime = 'minute';
var limiter = new RateLimiter(rateCount, rateTime);

var wundernode = function (apikey, debug, rateCount, rateTime) {
    if (rateCount && rateTime) {
        console.log('reseting rate : ' + rateCount + ' per ' + rateTime);
        limiter = new RateLimiter(rateCount, rateTime);
    }
    var that = this;
    var format = ".json";
    console.log('WunderNodeClient initialized, apikey: ' + apikey + ', debug enbaled: ' + debug + ', rateCount: ' + rateCount + ', rateTime: ' + rateTime);

    var host = 'http://api.wunderground.com/api/' + apikey;

    if (debug) console.log('Host: ' + host);
    var get = function (callback, params, path) {
        var url = host + path;
        if (debug) console.log('get: ' + url);

        // Throttle requests
        limiter.removeTokens(1, function (err, callbacks) {
            // err will only be set if we request more than the maximum number of
            // requests we set in the constructor

            // remainingRequests tells us how many additional requests could be sent
            // right this moment
            console.log('running limited request' + limiter.getTokensRemaining());
            request(url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    if (debug) console.log('response body: ' + body);
                    callback(error, body);
                }
                else if (error) {
                    console.log('error: ' + err);
                }

            });
        });


    };

    // autocomplete
    that.autocomplete = function (query, callback) {
        var path = "/autocomplete/q/" + query + format;
        get(callback, null, path);
    };

    // Weather station lookups

    that.geolookup = function (query, callback) {
        var path = "/geolookup/q/" + query + format;
        get(callback, null, path);
    };

    // Forecasts, current conditions and projected
    that.hourly7day = function (query, callback) {
        var path = "/hourly7day/q/" + query + format;
        get(callback, null, path);
    };

    that.hourly10day = function (query, callback) {
        var path = "/hourly10day/q/" + query + format;
        get(callback, null, path);
    };

    that.conditions = function (query, callback) {
        var path = "/conditions/q/" + query + format;
        get(callback, null, path);
    };


    that.forecast = function (query, callback) {
        var path = "/forecast/q/" + query + format;
        get(callback, null, path);
    };

    that.forecast10day = function (query, callback) {
        var path = "/forecast10day/q/" + query + format;
        get(callback, null, path);
    };

    that.almanac = function (query, callback) {
        var path = "/almanac/q/" + query + format;
        get(callback, null, path);
    };

    that.hourly = function (query, callback) {
        var path = "/hourly/q/" + query + format;
        get(callback, null, path);
    };

    that.yesterday = function (query, callback) {
        var path = "/yesterday/q/" + query + format;
        get(callback, null, path);
    };

    that.history = function (query, date, callback) {
        var path = "/history_" + date + "/q/" + query + format;
        get(callback, null, path);
    };

    // Satellite Imagery

    that.satellite = function (query, callback) {
        var path = "/satellite/q/" + query + format;
        get(callback, null, path);
    }

    that.planner = function (query, range, callback) {
        var path = "/planner_" + range + "/q/" + query + format;
        get(callback, null, path);
    }

    that.webcams = function (query, callback) {
        var path = "/webcams/q/" + query + format;
        get(callback, null, path);
    }
};

module.exports = wundernode;

        
