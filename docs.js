var git = require('gift');
var path = require('path');
var async = require('async');
var child_process = require('child_process');
var YUI_CMD = path.join('..', 'node_modules', '.bin', 'yuidoc') + ' --norecurse --extension .ts --parse-only ./src/engine --outdir ../data/yui/';

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

		child_process.execSync(YUI_CMD + 'edge', {
			cwd: './Excalibur'
		});

		// Get tags for repo
		repo.tags(function (err, tags) {

			// Iterate through tags
			async.eachSeries(tags, function (tag, callback) {

				console.log("Generating docs for " + tag.name + "...");

				// Checkout tag
				repo.checkout('tags/' + tag.name, function (err) {

					child_process.execSync(YUI_CMD + tag.name, {
						cwd: './Excalibur'
					});

					callback(err);
				});

			});

		});
	});

	
});