const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    // publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  // webpack-dev-server emit the bundles to memery and serve them from memory,
  // but we want to tweak the bundles and see what happend.
  // so we use webpack to emit bundles to disk and serve them from disk using http-server, NOT using webpack-dev-server.
  // devServer: {
  //   historyApiFallback: true,
  //   noInfo: false,
  //   overlay: true,
  //   contentBase: path.join(__dirname, "./dist")
  // },
  performance: {
    hints: false
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks(module, count) {
        var context = module.context;
        return typeof context === 'string' && context.indexOf('node_modules') >= 0;
      },
    }),
    new CopyWebpackPlugin([{
      from: './index.html'
    }])
  ]
}

if (process.env.NODE_ENV === 'production') {
  console.log('build in production mode');
  // https://webpack.js.org/configuration/devtool/
  module.exports.devtool = 'source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
} else {
  console.log('build in dev mode');
  module.exports.devtool = 'cheap-module-source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([

  ])
}
