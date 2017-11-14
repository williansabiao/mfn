import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

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
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3001
  }
}

module.exports = webpackConfig