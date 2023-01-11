const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, './dist'),
    sourceMapFilename: '[name].map',
    filename: 'main.js',
  },
  devtool: false,
  entry: ['./demo/app.jsx'],
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
    modules: [path.join(__dirname, 'node_modules')],
  },
  devServer: {
    historyApiFallback: true,
    hot: false,
    compress: true,
    port: 8080,
  },
  plugins: [new HtmlWebpackPlugin({ template: './demo/index.html' })],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          'ts-loader',
        ],
      },
      {
        test: /\.css$/,
        use: 'style-loader!css-loader',
      },
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader?limit=8192',
      },
    ],
  },
};
