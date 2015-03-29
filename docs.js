var git = require('gift');
var path = require('path');
var async = require('async');
var child_process = require('child_process');
var rimraf = require('rimraf');

var BUILD_CMD = path.join('..', 'node_modules', '.bin', 'typedoc');

var repo = git(path.join(__dirname, 'Excalibur'));

console.log("Fetching Excalibur... " + repo.path);

repo.remote_fetch('origin', function (err) {

	if (err) {
		console.log(err);
		return;
	}

	console.log("Repository fetched");

	console.log("Checkout master...");

	// Generate docs for edge (master)
	repo.checkout('master', function (err) {

		console.log("Removing existing docs...");

		rimraf.sync('pages/api/edge');

		console.log("Executing typedoc...");

		var typedoc = child_process.execSync(BUILD_CMD + 
			' -t ES5' +
			' --name "Excalibur.js Edge API Documentation"' +
			' --readme none' +
			' --hideGenerator' +
			' --mode file' +
			' --out ../pages/api/edge' +
			' src/engine', {
			cwd: './Excalibur'
		});
		process.stdout.write(typedoc);
	});

	
});