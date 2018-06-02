const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});
const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: 'style.[contenthash].css',
});
const WebpackCleanupPluginConfig = new WebpackCleanupPlugin();
const NamedModulesPlugin = new webpack.NamedModulesPlugin();
const HMRPlugin = new webpack.HotModuleReplacementPlugin();
const CopyPlugin = new CopyWebpackPlugin([{ from: 'src/static' }]);

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index.[hash].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    compress: true
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    WebpackCleanupPluginConfig,
    MiniCssExtractPluginConfig,
    CopyPlugin,
    HtmlWebpackPluginConfig,
    NamedModulesPlugin,
    HMRPlugin
  ]
};
