var path = require('path');
var fs = require('fs');
var child_process = require('child_process');
var rimraf = require('rimraf');

var BUILD_CMD = path.join('..', 'node_modules', '.bin', 'typedoc');

console.log("Fetching Excalibur... ");

if (!fs.existsSync('./Excalibur')) {
	child_process.execSync("git clone https://github.com/excaliburjs/Excalibur", {stdio: [0,1,2]});
} else {
	child_process.execSync("git pull", { cwd: './Excalibur', stdio: [0,1,2]});
}
child_process.execSync("git rev-parse HEAD", { cwd: "./Excalibur", stdio: [0,1,2] });

console.log("Removing existing docs...");

rimraf.sync('pages/api/edge');

console.log("Compiling default template (default)...");
try {
	if (!fs.existsSync('./typedoc-default-themes/node_modules')) {
		child_process.execSync("npm install", { cwd: "./typedoc-default-themes", stdio: [0,1,2] });
	}
} catch (e) {
	// fails to execute Linux commands, OK
}

console.log("Executing typedoc...");

child_process.execSync(BUILD_CMD + 
	' --target ES5' +
	' --experimentalDecorators' +
	' --name "Excalibur.js Edge API Documentation"' +
	' --readme src/engine/Docs/Index.md' +
	' --mode modules' +
	' --module amd' +
    ' --includes src/engine/Docs' +
	' --out ../pages/api/edge' +
	' --theme ../typedoc-default-themes/bin/default' +
	' --hideGenerator' +
	' --excludePrivate' +
	' --gaID UA-46390208-1' +
	' --gaSite excaliburjs.com' +
	' src/engine', {
	cwd: './Excalibur',
	stdio: [0,1,2]
});