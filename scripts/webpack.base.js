const path = require('path');
const webpack = require('webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const joinRoot = path.join.bind(path, __dirname, '..')

module.exports = {
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      'mylib': joinRoot('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                declaration: false,
              },
            },
          },
        ],
        include: [joinRoot('src'), joinRoot('__demo__')],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __MYLIB_VERSION__: JSON.stringify(process.env.MYLIB_VERSION || require('../package.json').version),
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
  ],
  stats: {
    modules: false,
  },
}
