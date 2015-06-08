module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    files: [
        'scripts/**/*.js',
        'test/*.spec.js',
        // these files will available in the webserver but NOT loaded with a <script> tag
        {
            pattern: 'scripts/**/*.js',
            included: false
        }
    ],
    exclude: [],
    autoWatch: true,
    browsers: ['Chrome']
  });
};