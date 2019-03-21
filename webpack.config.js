const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname,'build'),
    filename: 'index.bundle.js'
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    extensions:['.tsx','.json','.ts', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  module:{
    rules:[
        {
            test: /\.(ts|tsx)$/,
            use:[
                'ts-loader'
            ]
        }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname,'src')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'src','index.html')
    })
  ]
};