const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('webpack.production.js');

let libsDist = 'dist';
module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin([libsDist], {
      root: path.resolve(__dirname, './'),
      verbose: true,
      dry: false
    }),
    new CopyWebpackPlugin([
      { from: 'test*'},
    ], {
      ignore: [ '' ]
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    })
  ],
  // module: {
  //   rules: [
  //
  //   ]
  // },
  output: {
    filename: 'libs/[name].[chunkhash].js',
    path: path.resolve(__dirname, `./${libsDist}`),
    globalObject: 'this'
  }
});