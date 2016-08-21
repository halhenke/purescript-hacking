// const env = require('../dev.env.json');
// Object.assign(process.env, env);
require('babel-register');

const webpack = require('webpack');
const {
  client: clientConfig,
  server: serverConfig,
  devServerPort,
  devServerHost
} = require('./webpack.config');

const WebpackDevServer = require('webpack-dev-server');
const compiler = webpack(clientConfig);
// const webpackServer = new WebpackDevServer(compiler, {
//   // hot: true,
//   // publicPath: clientConfig.output.path,
//   // publicPath: clientConfig.output.publicPath,
//   // stats: {
//   //   // Do not show list of hundreds of files included in a bundle
//   //   chunkModules: false,
//   //   colors: true,
//   // },
// });

// webpackServer.listen(devServerPort, '0.0.0.0', err => {
//   if (err) {
//     console.log(`We found an error`);
//     console.error(err.stack);
//     return;
//   }
//   console.log(
//     `webpack dev server listening at ${devServerHost}:${devServerPort}`);
//   console.log(`We launched`);
// });

// // watch backend
// webpack(serverConfig, err => {
//   if (err) {
//     console.error(err.stack);
//     return;
//   }
//   console.log('Server built...');
//   done.server = true;
//   if (done.client) {
//     server.restart();
//   }
// });
