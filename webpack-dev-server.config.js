const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const srcPath = path.resolve(__dirname, 'src');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
var envFile = require('node-env-file')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// Try to read from environment file config for firebase config values.
try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
} catch (e) {}

const config = {
  // Entry points to the project
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
  // Server Configuration options
  devServer: {
    contentBase: 'src/www', // Relative directory for base of server
    devtool: 'eval',
    hot: true, // Live-reload
    inline: true,
    port: 3000, // Port Number
    host: 'localhost', // Change to '0.0.0.0' for external facing server
  },
  //devtool: 'eval',
   devtool: process.env.NODE_ENV === 'production' ? undefined : 'source-map',
  output: {
    path: buildPath, // Path of output file
    filename: 'app.js'
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './node_modules/foundation-sites/scss')]
  },
  plugins: [
    // Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    // Moves files
    new TransferWebpackPlugin([
      {
        from: 'www'
      },
      {
        from: 'app/assets/ico'
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
        loaders: ['babel-loader'],
        exclude: [nodeModulesPath]
      }
    ]
  },
  lessLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/bootstrap/less')
    ]
  }
};

module.exports = config;
