const { readFile, rename } = require('fs');
const { promisify } = require('util');
const { resolve } = require('path');

const readFileSync = async (oldPath, newPath) => {
	const arr = [];

	await promisify(rename)(oldPath, newPath);
	let data = await promisify(readFile)(newPath, 'utf8');
	data = JSON.parse(data);

	for (const v in data.devDependencies) {
		arr.push(v);
	}
	console.log(data.scripts);
	console.log(arr.join(' '));
};

readFileSync(resolve('package.json'), resolve('package-dev.json'));
