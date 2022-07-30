const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        pathRewrite: { '/api': '/' },
      },
    },
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});
