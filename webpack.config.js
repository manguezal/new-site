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
    return [{loader: "style-loader"}, 
            {loader: "css-loader"}, 
            {loader: "resolve-url-loader"},
            {loader: "sass-loader?sourceMap"}
            ];

  }else{
     return ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "resolve-url-loader","sass-loader?sourceMap"]
        });
  }
}


let config = {
  entry: {
    'vendor': './src/vendor',
    'app': [
      'react-hot-loader/patch',
      './src/index'
    ],
    
  },
  output: {
<<<<<<< HEAD
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: ''
=======
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'js/[name].js'
>>>>>>> 327e2dfa6201426e1cdaa22da0e473cfc6a35487
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
<<<<<<< HEAD
      { test: /\.(gif|png|jpe?g|svg)$/i,  
        exclude: /fonts/,
        use: [{
          loader: 'file-loader?name=../img/[name].[ext]&outputPath=/img/'}]
      },
      { test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
          exclude: [/img/, /images/],
          use: [{
              loader: "file-loader?name=../fonts/[name].[ext]&outputPath=/fonts/"
          }]
          
=======
      {
          test: /\.(jpg|jpeg|gif|png)$/,
          exclude: /node_modules/,
          loader:'file?limit=1024&name=images/[name].[ext]'
      },
      {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          exclude: /node_modules/,
          loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
>>>>>>> 327e2dfa6201426e1cdaa22da0e473cfc6a35487
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
    new webpack.DefinePlugin({'WEBPACK_ENV': '"dev"'})
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
<<<<<<< HEAD
    new webpack.DefinePlugin({'WEBPACK_ENV': '"production"'}),
    new CopyWebpackPlugin([
        { from: './src/index.html' }, 
        { from: './src/img/manguez_files/', to:'./img/manguez_files/'},
        { from: './src/ga.js', to: './'},  
      ], {}),
=======
    new webpack.DefinePlugin({
      'WEBPACK_ENV': '"production"'
    }),
    new CopyWebpackPlugin([
      {from: './src/index.html' }, 
      {from: './src/img/', to: 'img/'}, 
      {from: './src/fonts/', to: 'fonts/'}
    ]),
>>>>>>> 327e2dfa6201426e1cdaa22da0e473cfc6a35487
    new ExtractTextPlugin("css/styles.css")
  ];
}

module.exports = config;
