const path = require('path');

module.exports = {
  output: {
    path: __dirname,
    sourceMapFilename: '[name].map',
    filename: 'main.js',
    publicPath: '/assets/'
  },
  entry: ['./demo/app.jsx'],
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
    modules: [path.join(__dirname, 'node_modules')]
  },
  devServer: {
    contentBase: './demo',
    historyApiFallback: true,
    hot: false
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          'ts-loader'
        ]
      },
      {
        test: /\.css$/,
        use: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader?limit=8192'
      }
    ]
  }
};
