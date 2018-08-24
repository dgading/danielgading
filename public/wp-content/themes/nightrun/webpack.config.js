const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'assets')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
      chunkFilename: '[id].css',
      path: path.resolve(__dirname, '')
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [

          // {
          //   loader: 'style-loader',
          // },
          // {
          //   loader: 'css-loader',
          //   options: {
          //     importLoaders: 1,
          //   }
          // },
          // {
          //   loader: 'postcss-loader'
          // },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            },
          },
          'css-loader'
        ]
      }
    ]
  }
}