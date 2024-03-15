const path = require('path'); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './assets/js/index.js',
  devtool: "eval-source-map",
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          mangle: true,
          output: {
            comments: false
          }
        },
        sourceMap: true,
        exclude: [/\.min\.js$/gi]
      }),
    ],
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
        use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
      },
    ],
  },


  plugins: [
    new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
    }),
    
    new MiniCssExtractPlugin(),


    // new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: './assets/index.html',
    }),

    new HtmlWebpackPlugin({
      filename: "ru.html",
      template: './assets/ru.html',
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