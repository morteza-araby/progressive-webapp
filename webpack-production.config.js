const webpack = require('webpack');
const path = require('path');
const buildPath = path.join(__dirname, 'build');
const srcPath = path.join(__dirname, 'src');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
var envFile = require('node-env-file')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// Try to read from environment file config for firebase config values.
try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
} catch (e) {}

const config = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!bootstrap/dist/js/bootstrap.min.js',
    'webpack/hot/dev-server', 
    'webpack/hot/only-dev-server', 
    'script!./src/app/assets/js/bootstrap_custom.js',
    path.join(__dirname, '/src/app/app.js')
  ],
  externals: {
    jquery: 'jQuery'
  },
  // Render source-map file for final build
  //devtool: 'source-map',
   devtool: process.env.NODE_ENV === 'production' ? undefined : 'source-map',
  // output config
  output: {
    path: buildPath, // Path of output file
    filename: 'app.js', // Name of output file
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './node_modules/foundation-sites/scss')]
  },
  plugins: [
    // Define production build to allow React to strip out unnecessary checks
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // Minify the bundle
    new webpack
      .optimize
      .UglifyJsPlugin({
         minimize: true,
        compress: {
          // suppresses warnings, usually from module minification
          warnings: false
        }
      }),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    // Transfer Files
    new TransferWebpackPlugin([
      {
        from: 'www'
      },
      {
        from: 'app/assets/ico'
      },
      {
        from: 'app/assets/images',
        to: 'images'
      },
      {
        from: 'app/data',
        to: 'data'
      }
    ], path.resolve(__dirname, 'src')),
    // load jquery in global space
    new webpack.ProvidePlugin({'$': 'jquery', 'jQuery': 'jquery'}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
        MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID),
        GITHUB_ACCESS_TOKEN: JSON.stringify(process.env.GITHUB_ACCESS_TOKEN)
      }
    })
  ],
  resolve: {
    root: __dirname,
    modulesDirectories: [ //No need for alias anymore, I just keep it for remembering.
      'node_modules',
      srcPath + '/app/components',
      srcPath + '/app/components/chat',
      srcPath + '/app/components/login',
      srcPath + '/app/components/sidebar',
      srcPath + '/app/assets/js',
      srcPath + '/app/actions',
      srcPath + '/app/reducers',
      srcPath + '/www'
    ],
    alias: {
      Src: srcPath,
      Components: srcPath + '/app/components',
      Main: srcPath + '/app/Main.js',
      Reducers: srcPath + '/app/reducers',
      Actions: srcPath + '/app/actions',
      configureStore: srcPath + '/app/store/configureStore.js'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap'
      }, {
        test: /\.scss$/,
        loader: 'style!css?sourceMap!sass?sourceMap'
      }, {
        test: /\.(json)/,
        exclude: /node_modules/,
        loader: 'json-loader'
      }, {
        test: /\.(svg|ttf|woff|woff2|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader'
      }, {
        test: /\.js$/, // All .js files
        loaders: ['babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [nodeModulesPath]
      }
    ]
  }
};

module.exports = config;
