var path = require('path');
var test = path.join(process.cwd(), 'specs/main.js');

module.exports = function(config) {
  var conf = {

    basePath: '',

    frameworks: ['mocha', 'browserify'],

    files: [
      test
    ],

    exclude: [],

    preprocessors: {

    },

    browserify: {
      transform: ['envify', 'reactify'],
      watch: true,
      debug: true
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    captureTimeout: 60000,

    singleRun: false
  };

  conf.preprocessors[test] = ['browserify'];

  config.set(conf);
};
