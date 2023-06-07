const path = require('path');
const ThreadsPlugin = require('threads-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: 'workers_example',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  mode: 'production',
  plugins: [
    new ThreadsPlugin({
      globalObject: 'self'
    })
  ]
};