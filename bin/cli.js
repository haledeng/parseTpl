#!/usr/bin/env node
var parser = require('../index.js'),
	fs = require('fs'),
	path = require('path');


function getJSON() {
	var jsonPath = path.dirname(__dirname) + '/package.json';
	if (fs.existsSync(jsonPath)) {
		var content = fs.readFileSync(jsonPath);
		content = JSON.parse(content);
		return content;
	}
	return {};
}

function index() {
	var slice = Array.prototype.slice,
		params = process.argv[2] || '';

	var packageJson = getJSON();
	params = params.toLowerCase();
	if (params === '-v') {
		console.log(packageJson.version);
	} else if (params === '' || params.indexOf('-h') > -1) {
		console.log('\r\n');
		console.log('=======================================================');
		console.log('parseTpl 是一个编译模板的命令项');
		console.log('使用方式：');
		console.log('pt tpl.html');
		console.log('=======================================================');
		console.log('\r\n');
	} else {
		parser.parse(params);
	}
}

index();