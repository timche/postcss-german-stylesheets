var gulp = require('gulp');

var files = ['index.js', 'test/*.js', 'gulpfile.js'];

gulp.task('lint', function () {
    var eslint = require('gulp-eslint');
    return gulp.src(files)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('test', function () {
    var mocha = require('gulp-mocha');
    return gulp.src('test/*.js', { read: false })
        .pipe(mocha());
});

gulp.task('docs', function () {
    var _ = require('lodash');
    var fs = require('fs');
    var plugin = require('./');

    var properties = '# Properties\n| English | German |\n| ------ | ------ |';
    var values = '\n\n# Values\n| English | German |\n| ------ | ------ |';
    var overview = '';
    var file = 'docs/OVERVIEW.md';

    _.forEach(plugin.mapProperties, function (value, key) {
        properties += '\n| `' + key + '` | `' + value + '` |';
    });
    _.forEach(plugin.mapValues, function (value, key) {
        values += '\n| `' + key + '` | `' + value + '` |';
    });
    overview = properties + values;

    fs.writeFile(file, overview, function (error) {
        if(error) {
            console.error(error);
        }
    });
});

gulp.task('default', ['lint', 'test']);

gulp.task('watch', function () {
    gulp.watch(files, ['lint', 'test']);
});
