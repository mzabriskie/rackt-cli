#!/usr/bin/env node

var path = require('path');
console.log(require(path.join(process.cwd(), 'package.json')).name);
