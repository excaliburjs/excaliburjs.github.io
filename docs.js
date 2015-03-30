var path = require('path');
var child_process = require('child_process');
var rimraf = require('rimraf');

var BUILD_CMD = path.join('..', 'node_modules', '.bin', 'typedoc');

console.log("Fetching Excalibur... ");

process.stdout.write(child_process.execSync("git clone https://github.com/excaliburjs/Excalibur"));
process.stdout.write(child_process.execSync("git rev-parse HEAD", { cwd: "./Excalibur" }));

console.log("Removing existing docs...");

rimraf.sync('pages/api/edge');

console.log("Executing typedoc...");

process.stdout.write(child_process.execSync(BUILD_CMD + 
	' -t ES5' +
	' --name "Excalibur.js Edge API Documentation"' +
	' --readme none' +
	' --hideGenerator' +
	' --mode file' +
	' --out ../pages/api/edge' +
	' src/engine', {
	cwd: './Excalibur'
}));