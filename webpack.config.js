const webpackConfig = {
  entry: './output/Main',
  output: {
    path: './build',
    filename: 'bundle.js',
  },
  loaders: [
    // ...
    {
      test: /\.purs$/,
      loader: 'purs-loader',
      exclude: /node_modules/,
      query: {
        psc: 'psa',
        src: ['bower_components/purescript-*/src/**/*.purs', 'src/**/*.purs']
      }
    }
    // ...
  ]
  // ...
};

module.exports = webpackConfig;
