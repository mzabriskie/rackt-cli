#!../node_modules/.bin/babel-node

/*
 Build a basic page for the examples index
*/

import fs from 'fs';
import path from 'path';

function generateIndex({pkg, examples=[]}={}) {
  // build example list
  const examplesList = examples.map(example => {
    return `<li><a href=\"./examples/${example}/index.html\">${example}</a></li>`;
  }).join('\n');

  return `
    <style>
    body {
      color: #333;
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-weight: 200;
    }
    </style>
    <title>${pkg.name} Examples</title>
    <h1>${pkg.name} Examples - ${pkg.version}</h1>
    <h3><a href="${pkg.homepage}">${pkg.homepage}</a></h3>
    <p>${pkg.description}</p>
    <ul>
      ${examplesList}
    </ul>
  `;
}

const pkg = require(path.join(process.cwd(), 'package.json'));
const examples = fs.readdirSync(path.join(process.cwd(), 'examples')).filter(name => (name !== '__build__'));

// output to stdout
const finalHtml = generateIndex({ pkg, examples });

console.log(finalHtml);
