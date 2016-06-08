var path = require('path');
var child_process = require('child_process');
var rimraf = require('rimraf');

var BUILD_CMD = path.join('..', 'node_modules', '.bin', 'typedoc');

rimraf.sync('Excalibur');

console.log("Fetching Excalibur... ");

child_process.execSync("git clone https://github.com/excaliburjs/Excalibur", {stdio: [0,1,2]});
// BEGINTEMP: remove before merging
child_process.execSync("git checkout 596-ts18", {cwd: "./Excalibur", stdio: [0,1,2]});
// ENDTEMP
child_process.execSync("git rev-parse HEAD", { cwd: "./Excalibur", stdio: [0,1,2] });

console.log("Removing existing docs...");

rimraf.sync('pages/api/edge');

console.log("Executing typedoc...");

child_process.execSync(BUILD_CMD + 
	' --target ES5' +
	' --name "Excalibur.js Edge API Documentation"' +
	' --readme none' +
	' --mode file' +	
	' --out ../pages/api/edge' +
	' --theme ../typedoc-default-themes/bin/default' +
	' src/engine', {
	cwd: './Excalibur',
	stdio: [0,1,2]
});