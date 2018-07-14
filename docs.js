const path 			= require('path');
const fs 			= require('fs');
const child_process = require('child_process');
const rimraf 		= require('rimraf');
const request 		= require('sync-request');
const wrench		= require('wrench');
const BUILD_CMD 	= path.join('node_modules', '.bin', 'grunt');

function build(version, title) {
	const exPath = path.join('./ex', version);
	const themePath = path.join(exPath, 'typedoc-default-themes');	
	const branch = version === 'edge' ? 'master' : version;
	const docsPath = path.join(exPath, 'docs', 'api');
	const destPath = path.join('static', 'api', version);

	console.log('Fetching Excalibur, version:', version, 'branch:', branch);

	if (!fs.existsSync(exPath)) {
		child_process.execSync('git clone https://github.com/excaliburjs/Excalibur -b ' + branch + ' ' + exPath, { stdio: [0,1,2] });
		child_process.execSync('git submodule update --init --recursive', { cwd: exPath, stdio: [0,1,2] });
	} else {
		child_process.execSync('git pull', { cwd: exPath, stdio: [0,1,2]});
	}
	child_process.execSync('git rev-parse HEAD', { cwd: exPath, stdio: [0,1,2] });

	if (!fs.existsSync(path.join(exPath, 'node_modules'))) {
		child_process.execSync('npm install', { cwd: exPath, stdio: [0,1,2] });
	}

	console.log('Removing existing docs...', destPath);

	// Remove existing docs
	rimraf.sync(destPath);

	console.log('Building docs...', BUILD_CMD + ' apidocs:' + title);

	// Execute docs build step
	child_process.execSync(BUILD_CMD + ' apidocs:' + title, {
		cwd: exPath,
		stdio: [0,1,2]
	});
	
	console.log('Copying compiled docs...', destPath);

	// Copy to destination docs folder
	wrench.copyDirSyncRecursive(docsPath, destPath);
}

if (process.argv.length === 3) {
	// Build specific version
	console.info('Building specific version', process.argv[2]);

	build(process.argv[2], process.argv[2]);
} else {
	// Build edge
	build('edge', 'Edge');
}

if (process.env.TRAVIS_CI && !process.env.GH_TOKEN) {
	console.info('Missing GH_TOKEN environment variable, skipping building release tags');
	return;
}

console.info('Retrieving GH releases...');

// Retrieve tags
let headers = {
	'User-Agent': 'excaliburjs.github.io/0.1'
};

if (process.env.GH_TOKEN) {
	headers['Authorization'] = 'token ' + process.env.GH_TOKEN;
}

const res = request('GET', 
	'https://api.github.com/repos/excaliburjs/Excalibur/releases', { headers });

const releases = JSON.parse(res.getBody());

// Ignore drafts
const tags = releases.filter(r => !r.draft).map(r => r.tag_name);

console.info('Discovered', tags.length, 'releases:', tags);

tags.forEach(function (tag) {

	// Ignore releases that are already checked into source control
	if (fs.existsSync(path.join('pages', 'api', tag))) {
		return;
	}
	
	console.info('Tagged documentation', tag, 'hasn\'t been built');
	
	build(tag, tag);
});
