var webpackConfig = require('./webpack.config');
webpackConfig.devtool = 'inline-source-map';
//webpackConfig.target = "node";

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome', 'PhantomJS', 'Firefox' ],
    // karma only needs to know about the test bundle
    files: [
      'tests.bundle.js'
    ],
    frameworks: [ 'chai', 'mocha' ],
    plugins: [
      'karma-chrome-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],
    // run the bundle through the webpack and sourcemap plugins
    preprocessors: {
      'tests.bundle.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'dots' ],
    singleRun: true,
    // webpack config object
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    }
  });
};