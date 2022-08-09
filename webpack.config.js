const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rulesForJavaScript = {
  test: /\.(js|jsx)$/i,
  loader: 'babel-loader',
  exclude: '/node_modules/',
  options: {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic'
        }
      ]
    ]
  }
}

const rulesForCss = {
  test: /\.css$/i,
  use: [
    'style-loader',
    'css-loader'
  ]
}

const rulesForImages = {
  test: /\.(png|jpe?g|gif|svg)$/i,
  exclude: '/node_modules/',
  loader: 'file-loader',
  options: {
    outputPath: 'assets'
  }
}

const rules = [
  rulesForJavaScript,
  rulesForCss,
  rulesForImages
]

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'

  return {
    mode: 'development',
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build')
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
    ],
    devServer: {
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, 'build')
      },
      compress: true,
      port: 3005
    }
  }
}
