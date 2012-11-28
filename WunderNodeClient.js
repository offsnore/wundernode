//
// Wunderground API Client for node.js
// Andrew Anderson
// twitter: @andrewandersons
//
// Changes made by lgriffin
// twitter: @leighgriffin


var request = require('request');
var util = require('util')

var WunderNodeClient = function(apikey, debug, country, city) {
        var that = this;
        var location = country+"/"+city;
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
        that.autocomplete = function(callback, query) {
                var path = "/autocomplete/q/" + location +  format;
                get(callback, null, path);
        };

        // Weather station lookups

        that.geolookup = function(callback, query) {
                var path = "/geolookup/q/" + location +  format;
                get(callback, null, path);
        };

        // Forecasts, current conditions and projected
        that.hourly7day = function(callback, query) {
                var path = "/hourly7day/q/" + location +  format;
                get(callback, null, path);
        };

        that.hourly10day = function(callback, query) {
                var path = "/hourly10day/q/" + location +  format;
                get(callback, null, path);
        };

        that.conditions = function(callback, query) {
                var path = "/conditions/q/" + location +  format;
                get(callback, null, path);
        };

        
         that.forecast = function(callback, query) {
                var path = "/forecast/q/" + location +  format;
                get(callback, null, path);
        };

        that.almanac = function(callback, query) {
                var path = "/almanac/q/" + location +  format;
                get(callback, null, path);
        };

        that.hourly = function(callback, query) {
                var path = "/hourly/q/" + location +  format;
                get(callback, null, path);
        };

        that.yesterday = function(callback, query) {
                var path = "/yesterday/q/" + location +  format;
                get(callback, null, path);
        };
                // Satellite Imagery

        that.satellite = function(callback, query) {
                var path = "/satellite/q/" + location +  format;
                get(callback, null, path);
        }

        that.foo = function(callback, query) {
                return util.foo();
        }
};

module.exports = WunderNodeClient;

        