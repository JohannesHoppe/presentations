module.exports = function(config) {
  config.set({
    basePath: 'scripts',
    frameworks: ['jasmine'],
    files: ['**/*.js'],
    exclude: [],
    autoWatch: true,
    browsers: ['Chrome']
  });
};