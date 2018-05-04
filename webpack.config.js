const WEBPACK_SERVER_HOST = process.env.WEBPACK_SERVER_HOST || 'localhost';
const WEBPACK_SERVER_PORT = process.env.WEBPACK_SERVER_PORT || 4000;
const WEBPACK_SERVER = `http://${WEBPACK_SERVER_HOST}:${WEBPACK_SERVER_PORT}`;
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');


// const nodeModules = fs.readdirSync('node_modules')
//   .filter(x => !x.startsWith('.bin') && !(x in alias));

const entry = [
    // entry: './output/Main',
    // entry: './src/Main.purs',
  './src/webpack.entry.js',
  'webpack-dev-server/client?http://localhost:8080',
];

const clientConfig = {
  entry: entry,
  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js',
  },
  resolve: {
    // root: [
    //   path.resolve('./src')
    // ],
    // modulesDirectories: [ 'node_modules', 'bower_components' ],
    // modulesDirectories: [ 'node_modules', 'bower_components', 'src' ],
    extensions: [ '', '.purs', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.purs/,
        // test: /\.purs/,
        // test: /\.purs$/,
        loader: 'purs-loader',
        exclude: /node_modules/,
        query: {
          // psc: 'psa',
          src: ['bower_components/purescript-*/src/**/*.purs', 'src/**/*.purs'],
          // src: ['bower_components/purescript-*/src/**/*.purs', '**/*.purs'],
          bundle: false,
          pscArgs: { sourceMaps: true },
          pscIde: true

        },
      },
    ],
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    stats: {
      // Do not show list of hundreds of files included in a bundle
      chunkModules: false,
      colors: true
    }
  },
};

// const serverConfig = {
//   entry: {
//     index: [path.join(__dirname, 'src', 'server', 'index.js')],
//   },
//   output: {
//     filename: '[name].js',
//     path: path.join(__dirname, 'build', 'server'),
//     publicPath: '/static/',
//   },
//   target: 'node',
//   node: {
//     __dirname: true,
//     __filename: true,
//   },
//   plugins: [
//     new webpack.BannerPlugin(`
//       global.moduleHack = function (cb) {
//         cb(module);
//       };
//     `, {raw: true, entryOnly: true}),
//   ],
//   // externals: [
//   //   (context, request, callback) => {
//   //     if (nodeModules.indexOf(request.split('/')[0]) >= 0) {
//   //       callback(null, `commonjs ${request}`);
//   //     } else {
//   //       callback();
//   //     }
//   //   },
//   // ],
// };

module.exports = clientConfig;
// module.exports = {
//   client: clientConfig,
//   server: serverConfig,
//   devServerHost: WEBPACK_SERVER_HOST,
//   devServerPort: WEBPACK_SERVER_PORT,
// };
