"use strict";
const gulp        = require('gulp');
const browserSync = require('browser-sync');
const fileInclude = require('gulp-file-include');
const less        = require('gulp-less');
const minifyCSS   = require('gulp-minify-css');
const rename      = require('gulp-rename');
const sourcemaps  = require('gulp-sourcemaps');
const uglify      = require('gulp-uglify');
const inject      = require('gulp-inject');
const series      = require('stream-series');
const concat      = require('gulp-concat');
const image       = require('gulp-image');

gulp.task('include', function() {
    gulp.src(['./src/index.html'])
        .pipe(fileInclude({
            prefix: "@@",
            basepath: "@file"
        }))
        .pipe(gulp.dest('./www/'));
});

gulp.task('less', function() {
    gulp.src('./src/less/main.less')
        .pipe(sourcemaps.init())
        .pipe(less({
            paths: ['./src/less/**/']
        }))
        .pipe(minifyCSS())
        .pipe(rename({ suffix: ".min" }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./www/assets/css/'))
        .pipe(browserSync.stream());
});

gulp.task('js', function() {
    gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('./www/assets/js/'));
});

gulp.task('fonts', function() {
    let paths = [
        './src/fonts/*',
        './node_modules/font-awesome/fonts/*'
    ];

    gulp.src(paths)
        .pipe(gulp.dest('./www/assets/fonts/'));
});

gulp.task('vendor-js', function() {
    let paths = [
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.js'
    ];

    gulp.src(paths)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./www/assets/js/vendor/'));
});

gulp.task('image', function() {
    gulp.src('./src/img/**/*')
        .pipe(image())
        .pipe(gulp.dest('./www/assets/img/'));
});

gulp.task('index', function() {
    let styleStream    = gulp.src(['assets/css/**/*.css'], {'cwd': __dirname + '/www/'}, {read: false});
    let jsVendorStream = gulp.src(['assets/js/vendor/vendor.js'], {'cwd': __dirname + '/www/'}, {read: false});
    let jsStream       = gulp.src(['assets/js/*.js'], {'cwd': __dirname + '/www/'}, {read: false});

    gulp.src(['./src/*.html'])
        .pipe(inject(series(styleStream, jsVendorStream, jsStream)))
        .pipe(gulp.dest('./src'));
});

gulp.task('build', ['less', 'js', 'vendor-js', 'fonts', 'index', 'image', 'include'])

gulp.task('server', function() {
    browserSync.init({
        server: "./www/"
    });
});

gulp.task('dev', function() {
    browserSync.init({
        server: "./www/"
    });

    gulp.watch('./src/less/**/*.less', ['less']).on('change', browserSync.reload);
    gulp.watch('./src/*.html', ['include']).on('change', browserSync.reload);
    gulp.watch('./src/js/*.js', ['js']).on('change', browserSync.reload);
});