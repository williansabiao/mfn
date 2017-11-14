import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

import poststylus from 'poststylus'

const SOURCE_PATH = './src'

const webpackConfig = {
  entry: `${SOURCE_PATH}/index.js`,
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      template: `${SOURCE_PATH}/index.html`,
      filename: './index.html',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        stylus: {
          use: [
            poststylus('autoprefixer')
          ]
        }
      }
    }),
    new ExtractTextPlugin("styles.css"),
  ],
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'] 
        }),
      },
      {
        test: /\.(styl)$/, 
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'stylus-loader'] 
        }),
      }
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3001
  }
}

module.exports = webpackConfig