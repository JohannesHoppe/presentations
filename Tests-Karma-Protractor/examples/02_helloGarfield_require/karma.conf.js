module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine', 'requirejs'],
    files: [
        'scripts/require.config.karma.js',
        { 
            pattern: 'scripts/**/*.js',
            included: false
        },
        { 
            pattern: 'test/**/*.js',
            included: false
        }
    ],
    exclude: [],
    autoWatch: true,
    browsers: ['Chrome']
  });
};