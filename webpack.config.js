const path = require('path'); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const dotenv = require('dotenv').config();
module.exports = {
  mode: 'development',
  entry: './assets/js/index.js',
  devtool: "eval-source-map",
  optimization: {
    minimize: true,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(s(a|c)ss)$/, 
        use: ['style-loader','css-loader', 'sass-loader']
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
    }),

    new HtmlWebpackPlugin({
      template: './assets/index.html',
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Каталог для статики
    },
    hot: true,
    open: true,
  },

};