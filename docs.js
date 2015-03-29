var git = require('gift');
var path = require('path');
var async = require('async');
var child_process = require('child_process');
var BUILD_CMD = path.join('..', 'node_modules', '.bin', 'typedoc') + ' src/engine --mode file --out ../_ghpages/docs/api/';

var repo = git(path.join(__dirname, 'Excalibur'));

console.log("Fetching Excalibur... " + repo.path);

repo.remote_fetch('origin', function (err) {

	if (err) {
		console.log(err);
		return;
	}

	console.log("Repository fetched");

	console.log("Generating docs for master...");

	// Generate docs for edge (master)
	repo.checkout('master', function (err) {

		child_process.execSync(BUILD_CMD + 'edge', {
			cwd: './Excalibur'
		});
	});

	
});