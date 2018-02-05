const { rename } = require('fs');
const { promisify } = require('util');
const { resolve } = require('path');

const readFileSync = async (oldPath, newPath) => await promisify(rename)(oldPath, newPath);

readFileSync(resolve('package.json'), resolve('package-dev.json'));
