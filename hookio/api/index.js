// hook.io api
// the api exposes methods to the public for interacting with the hook.io platform
var hookIO = require('../index').hookIO,
    fs = require('fs'),
	sys = require('sys');

exports.createHook = function(hook){
  sys.puts('api.createHook');
};

