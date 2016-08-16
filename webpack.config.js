const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const bourbon = require("bourbon").includePaths;
const neat = require("bourbon-neat").includePaths

module.exports = {
  context: __dirname,
  entry: './assets/js/app.jsx',
  output: {
    path: path.join(__dirname, '/public/js'),
    filename: 'bundle.js'
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
      },
      {
       test: /\.scss$/,
       loaders: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
     }
    ]
  },
  plugins: [
		new ExtractTextPlugin('public/stylesheets/styles.css')
	],
  // sassLoader: {
  //   includePaths: [bourbon, neat]
  // }
};
