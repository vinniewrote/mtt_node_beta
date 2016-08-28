const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const bourbon = require("bourbon").includePaths;
const neat = require("bourbon-neat").includePaths

module.exports = {
  context: __dirname,
  entry: './assets/js/app.jsx',
  output: {
    path: path.join(__dirname, '/public/js'),
    filename: 'thrillBundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
};
