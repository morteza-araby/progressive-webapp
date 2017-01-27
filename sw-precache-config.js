module.exports = {
stripPrefix: 'build/',
//   staticFileGlobs: [
//     'build/*.html',
//     'build/manifest.json',
//     'build/static/**/!(*map*)'
//   ],
staticFileGlobs: [ 
    //'build' + '/**/*.{js,html,json,css,png,jpg,gif,svg,eot,ttf,woff}',
    //'build' + '/**/*.*',
    'build/**/!(*map*)'
],
//importScripts: ['build/app.js'],
  //dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'build/service-worker.js',
  verbose: 'true'
};