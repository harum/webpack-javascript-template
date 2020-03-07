const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const meta = {
  viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
  'theme-color': '#4285f4',
};

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    app: './src/app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // Generates default index.html
      meta,
      title: 'Webpack Javascript Template',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      // Generates app.html
      meta,
      filename: 'app.html',
      template: 'src/templates/app.html',
      title: 'Webpack Javascript App Template',
      chunks: ['app'],
    }),
    new FaviconsWebpackPlugin(path.resolve(__dirname, '../src/logo.png')),
  ],
};
