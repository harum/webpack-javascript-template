const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackMerge = require('webpack-merge');

const baseConfig = require('./webpack.config');

const additionalConfig = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name]-[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css',
    }),
  ],
};

const productionConfig = webpackMerge(baseConfig, additionalConfig);

module.exports = productionConfig;
