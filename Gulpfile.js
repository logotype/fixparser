/*!
 * fixparser
 * https://github.com/logotype/fixparser.git
 *
 * Copyright 2015 Victor Norgren
 * Released under the MIT license
 */
var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    del = require('del'),
    $ = require('gulp-load-plugins')();

gulp.task('eslint', function () {
    return gulp.src(['./src/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('clean', ['eslint'], function(done) {
    del(['build/**'], done);
});

gulp.task('compile', ['clean'], function() {
    del(['build/**']);
    return gulp.src(['./src/**/*.js'])
        .pipe($.babel({compact:false}))
        .pipe($.uglify())
        .pipe(gulp.dest('./build'));
});

gulp.task('test', ['compile'], function () {
    return gulp.src('./test/**/*.js', {read: false})
        .pipe($.mocha({
            recursive: true,
            compilers: require('babel/register'),
            reporter: 'spec'
        }));
});

gulp.task('default', ['eslint', 'compile', 'test']);