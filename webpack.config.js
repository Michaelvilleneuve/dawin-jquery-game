var webpack = require('webpack');

module.exports = {
  entry: './game.js',
  output: {
    path: __dirname,
    filename: '/public/assets/js/bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: false
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
