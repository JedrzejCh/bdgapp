const path = require('path');

module.exports = {
  entry: './bin/index.ts',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js' ],
  },
  output: {
    filename: 'api.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
};