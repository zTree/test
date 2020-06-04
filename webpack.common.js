// const path = require('path');


console.log('webpack.common.js');
module.exports = {
  module: {
    rules: [
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  entry: {
    ZtreeAutoPublishTest: './src/ZtreeAutoPublishTest.js',
  }
};