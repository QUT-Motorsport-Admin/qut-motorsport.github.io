var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin ({
    template: __dirname + '/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
  entry: __dirname + '/index.tsx',
  module: {
    rules: [ 
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },
      {
        test: /\.less$/,
        loader: 'less-loader',
        exclude: '/node_modules'
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [ HTMLWebpackPluginConfig ],
  devServer: {
      port: 3000
  }
};