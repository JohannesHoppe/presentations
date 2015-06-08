module.exports = function(config) {
  config.set({
    basePath: 'scripts',
    frameworks: ['jasmine', 'requirejs'],
    files: [
        'require.config.karma.js',
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