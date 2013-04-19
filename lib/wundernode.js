//
// Wunderground API Client for node.js
// Andrew Anderson
// twitter: @andrewandersons
//
// Changes made by lgriffin
// twitter: @leighgriffin


var request = require('request');
var util = require('util')

var wundernode = function(apikey, debug) {
        var that = this;
        var format = ".json";
        console.log ('WunderNodeClient initialized, apikey: ' + apikey + ', debug enbaled: ' + debug);
        var host = 'http://api.wunderground.com/api/' + apikey;

        if (debug) console.log('Host: ' + host);
        var get = function(callback, params, path) {
                var url = host + path;
                if (debug) console.log ('get: ' + url);
                request(url, function (error, response, body) {
                        if (!error && response.statusCode == 200) {
                        if (debug) console.log('response body: ' + body);
                                callback.call(that, error, body);
                        }
                        else if (error) {
                                console.log('error: '  + err);
                        }

                });
        };

        // autocomplete                     
        that.autocomplete = function(query, callback) {
                var path = "/autocomplete/q/" + query +  format;
                get(callback, null, path);
        };

        // Weather station lookups

           that.geolookup = function(query, callback) {
                var path = "/geolookup/q/" + query +  format;
                get(callback, null, path);
        };

        // Forecasts, current conditions and projected
        that.hourly7day = function(query, callback) {
                var path = "/hourly7day/q/" + query +  format;
                get(callback, null, path);
        };

        that.hourly10day = function(query, callback) {
                var path = "/hourly10day/q/" + query +  format;
                get(callback, null, path);
        };

        that.conditions = function(query, callback) {
                var path = "/conditions/q/" + query +  format;
                get(callback, null, path);
        };

        
         that.forecast = function(query, callback) {
                var path = "/forecast/q/" + query +  format;
                get(callback, null, path);
        };

        that.almanac = function(query, callback) {
                var path = "/almanac/q/" + query +  format;
                get(callback, null, path);
        };

        that.hourly = function(query, callback) {
                var path = "/hourly/q/" + query +  format;
                get(callback, null, path);
        };

        that.yesterday = function(query, callback) {
                var path = "/yesterday/q/" + query +  format;
                get(callback, null, path);
        };
                // Satellite Imagery

        that.satellite = function(query, callback) {
                var path = "/satellite/q/" + query +  format;
                get(callback, null, path);
        }

        that.foo = function(query, callback) {
                return util.foo();
        }
};

module.exports = wundernode;

        