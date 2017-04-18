const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const IS_PRODUCTION = process.argv.indexOf('-p') !== -1;



const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css"
});

const sassConfig = function(){

  if(!IS_PRODUCTION){
    return [{
            loader: "style-loader",
            options: {root: '/dist'} // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }];

/*    extractSass.extract({
              use: [{
                  loader: "css-loader"
              }, {
                  loader: "sass-loader"
              }],
              // use style-loader in development
              fallback: "style-loader"
          }); */
  }else{
     return ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        });
  }
}


let config = {
  entry: {
    'vendor': './src/vendor',
    'app': [
      'react-hot-loader/patch',
      './src/index'
    ]
  },
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      // { enforce: 'pre', test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader' }
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.html/, loader: 'html-loader' },
      {
          test: /\.(jpg|jpeg|gif|png)$/,
          exclude: /node_modules/,
          loader:'file?limit=1024&name=images/[name].[ext]'
      },
      {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          exclude: /node_modules/,
          loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
      },
      {
        test: /\.scss$/,
        use: sassConfig()
      }
    ]
  }
};

if (!IS_PRODUCTION) {
  config.devtool = 'source-map';
  config.plugins = [
    new webpack.DefinePlugin({
      'WEBPACK_ENV': '"dev"'
    })
  ]
} else {
  config.plugins = [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      comments: false
    }),
    new webpack.DefinePlugin({
      'WEBPACK_ENV': '"production"'
    }),
    new CopyWebpackPlugin([
      {from: './src/index.html' }, 
      {from: './src/img/**/*', to: 'img/'}, 
      {from: './src/fonts/**/*', to: 'fonts/'}
    ]),
    new ExtractTextPlugin("css/styles.css")
  ];
}

module.exports = config;
