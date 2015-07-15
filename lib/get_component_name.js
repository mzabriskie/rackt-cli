#!/usr/bin/env node

var path = require('path');
var fs = require('fs');
var file = path.join(process.cwd(), 'package.json');

function PascalCase(str) {
  var parts = str.split('-');
  for (var i=0, l=parts.length; i<l; i++) {
    parts[i] = parts[i].substring(0, 1).toUpperCase() + parts[i].substring(1);
  }
  return parts.join('');
}

if (fs.existsSync(file)) {
  console.log(PascalCase(require(file).name));
}
