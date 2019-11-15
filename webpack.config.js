var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/App.js',
    output: {
      path: __dirname,
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
      {
          test: /\.js$/,
          loader: 'babel-loader',
          resolve: {
            modules: [path.join(__dirname, 'node_modules')]
          }
      },
      { 
          test: /\.(sass|scss)$/, 
          loaders: ["style-loader", "css-loader", "postcss-loader", "sass-loader"] 
      },
      {
          test: /\.(jpe?g)?$/, 
          use: [{ loader: 'url-loader', options:{ mimetype: 'image/jpeg'} } ] 
      },
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
  }