'use strict'; // Do this as the first thing so that any code reading it knows the right env.

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development'; // Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.

process.on('unhandledRejection', function (err) {
  throw err;
}); // Ensure environment variables are read.

require('../config/env');

var fs = require('fs');

var chalk = require('chalk');

var webpack = require('webpack');

var WebpackDevServer = require('webpack-dev-server');

var clearConsole = require('react-dev-utils/clearConsole');

var checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');

var _require = require('react-dev-utils/WebpackDevServerUtils'),
    choosePort = _require.choosePort,
    createCompiler = _require.createCompiler,
    prepareProxy = _require.prepareProxy,
    prepareUrls = _require.prepareUrls;

var openBrowser = require('react-dev-utils/openBrowser');

var paths = require('../config/paths');

var config = require('../config/webpack.config.dev');

var createDevServerConfig = require('../config/webpackDevServer.config');

var useYarn = fs.existsSync(paths.yarnLockFile);
var isInteractive = process.stdout.isTTY; // Warn and crash if required files are missing

if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
} // Tools like Cloud9 rely on this.


var DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
var HOST = process.env.HOST || '0.0.0.0';

if (process.env.HOST) {
  console.log(chalk.cyan("Attempting to bind to HOST environment variable: ".concat(chalk.yellow(chalk.bold(process.env.HOST)))));
  console.log("If this was unintentional, check that you haven't mistakenly set it in your shell.");
  console.log("Learn more here: ".concat(chalk.yellow('http://bit.ly/2mwWSwH')));
  console.log();
} // We attempt to use the default port but if it is busy, we offer the user to
// run on a different port. `choosePort()` Promise resolves to the next free port.


choosePort(HOST, DEFAULT_PORT).then(function (port) {
  if (port == null) {
    // We have not found a port.
    return;
  }

  var protocol = process.env.HTTPS === 'true' ? 'https' : 'http';

  var appName = require(paths.appPackageJson).name;

  var urls = prepareUrls(protocol, HOST, port); // Create a webpack compiler that is configured with custom messages.

  var compiler = createCompiler(webpack, config, appName, urls, useYarn); // Load proxy config

  var proxySetting = require(paths.appPackageJson).proxy;

  var proxyConfig = prepareProxy(proxySetting, paths.appPublic); // Serve webpack assets generated by the compiler over a web sever.

  var serverConfig = createDevServerConfig(proxyConfig, urls.lanUrlForConfig);
  var devServer = new WebpackDevServer(compiler, serverConfig); // Launch WebpackDevServer.

  devServer.listen(port, HOST, function (err) {
    if (err) {
      return console.log(err);
    }

    if (isInteractive) {
      clearConsole();
    }

    console.log(chalk.cyan('Starting the development server...\n'));
    openBrowser(urls.localUrlForBrowser);
  });
  ['SIGINT', 'SIGTERM'].forEach(function (sig) {
    process.on(sig, function () {
      devServer.close();
      process.exit();
    });
  });
})["catch"](function (err) {
  if (err && err.message) {
    console.log(err.message);
  }

  process.exit(1);
});