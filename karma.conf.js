var path = require('path');
var test = path.join(process.cwd(), 'specs/main.js');

module.exports = function(config) {
  var conf = {
    basePath: '',

    frameworks: ['mocha'],

    files: [test],

    preprocessors: {},

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    captureTimeout: 60000,

    singleRun: false,

    webpack: {
      cache: true,
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: path.resolve(process.env.RACKT_PATH, 'node_modules/babel-loader')
          }
        ]
      }
    },

    webpackServer: {
      stats: {
        colors: true
      }
    }
  };

  conf.preprocessors[test] = ['webpack'];

  config.set(conf);
};
