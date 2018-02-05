import { readFile } from 'fs';
import { promisify } from 'util';
import { resolve } from 'path';

const readFileSync = async (path, encoding) => {
	let data = await promisify(readFile)(path, encoding);
	data = JSON.parse(data);
	console.log(data.name);
};

readFileSync(resolve('package.json'), 'utf8');
