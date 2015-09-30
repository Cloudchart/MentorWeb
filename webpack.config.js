var path                = require('path')
var ExtractTextPlugin   = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + '/app/assets',
  entry: './assets.js',
  output: {
    path:     __dirname + "/app/public/assets",
    filename: "application.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', query: { stage: 0, plugins: ['./app/babel-relay-plugin'] } },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.scss']
  },
  plugins: [
    new ExtractTextPlugin('application.css', { allChunks: true })
  ]
}
