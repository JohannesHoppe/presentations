module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',
    frameworks: ['jasmine'],
     // list of files / patterns to load in the browser
    files: [
        'scripts/**/*.js',
        'test/*.spec.js',
        // these files will available in the webserver but NOT loaded with a <script> tag
        {
            pattern: '**/*.js',
            included: false
        }
    ],
    exclude: [],
    autoWatch: true,
    browsers: ['Chrome']
  });
};