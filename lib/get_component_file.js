#!/usr/bin/env node

var path = require('path');
var fs = require('fs');
var file = path.join(process.cwd(), 'package.json');

if (fs.existsSync(file)) {
  console.log(require(file).name);
}
