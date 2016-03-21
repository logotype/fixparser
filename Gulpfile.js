/*!
 * fixparser
 * https://github.com/logotype/fixparser.git
 *
 * Copyright 2015 Victor Norgren
 * Released under the MIT license
 */
const gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    del = require('del'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream');

gulp.task('eslint', () => {
    return gulp.src(['./src/**/*.js', './test/**/*.js', './perf/**/*.js', './examples/**/*.js'])
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.eslint.failAfterError());
});

gulp.task('clean', ['eslint'], (done) => {
    del(['build/**']).then(() => {
        done();
    });

});

gulp.task('transpile', ['clean'], () => {
    return browserify('./src/FIXParser.js', { debug: true })
        .transform(babelify)
        .bundle()
        .on('error', (err) => { console.log(`Error: ${err.message}`); })
        .pipe(source('FIXParser.js'))
        .pipe($.streamify($.uglify()))
        .pipe(gulp.dest('./build'));
});

gulp.task('perf', () => {
    return gulp.src(['./perf/**/*.js'])
        .pipe($.babel())
        .pipe($.uglify())
        .pipe(gulp.dest('./perfbuild'));
});

gulp.task('test', ['transpile'], () => {
    return gulp.src('./test/**/*.js', {read: false})
        .pipe($.mocha({
            recursive: true,
            compilers: require('babel/register'),
            reporter: 'spec'
        }));
});

gulp.task('default', ['eslint', 'transpile']);