var path = require('path');
var webpack = require('webpack');
var BASE_DIR = process.cwd();
var COMPONENT_FILE = process.env.COMPONENT_FILE;
var COMPONENT_NAME = process.env.COMPONENT_NAME;
var plugins = [];

if (process.env.MINIFY) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
  COMPONENT_FILE += '.min';
}

module.exports = {
  entry: path.resolve(BASE_DIR, 'lib/main.js'),
  output: {
    filename: path.resolve(BASE_DIR, 'dist/' + COMPONENT_FILE + '.js'),
    library: COMPONENT_NAME,
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'React'
  },
  plugins: plugins
};
