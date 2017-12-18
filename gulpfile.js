'use strict'

var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require("browserify");
var source =  require("vinyl-source-stream");
var reactify = require("reactify");

// Lint JS/JSX files
gulp.task('eslint', function() {
    return gulp.src('./app/dist/*.js')
        .pipe(eslint({
            baseConfig: {
                "ecmaFeatures": {
                    "jsx": true
                }
            }
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('views', function buildHTML() {
    gulp.src('./app/src/*.pug')
        .pipe(pug({pretty: true}).on('error', sass.logError))
        .pipe(gulp.dest('./app/dist/view'))
});

// Compile Sass to CSS
gulp.task('sass', function() {
    var autoprefixerOptions = {
        browsers: ['last 2 versions'],
    };
    var filterOptions = '**/*.css';
    var reloadOptions = {
        stream: true,
    };
    return gulp.src('./app/src/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./app/dist/style'));
});

gulp.task("browserify", function() {
 var b = browserify({
 entries: ["./app/src/main.js"],
 debug: true
 });
 b.transform(reactify);
 return b.bundle()
 .pipe(source("main.js"))
 .pipe(gulp.dest("./app/dist"));
});

gulp.task('watch', function() {
    gulp.watch('./app/src/*.pug', ['views'])
    gulp.watch('./app/src/*.sass', ['sass'])
    gulp.watch('./app/src/*.js', ['browserify']);
    gulp.watch('./app/src/*.jsx', ['browserify']);
});

gulp.task('build', ['sass', 'views', 'browserify']);
gulp.task('default', ['build', 'watch']);
