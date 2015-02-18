var gulp         = require('gulp');
var run_sequence = require('run-sequence');
var bower        = require('gulp-bower');
var bower_files  = require('main-bower-files');
var concat       = require('gulp-concat');
var sass         = require('gulp-sass');

var paths = {
  scss: [
    'vendor/bower/normalize.css',
    'vendor/bower/**/*.css',
    'vendor/bower/**/*.scss',
    'src/scss/application.scss'
  ]
};

gulp.task('bower-files', ['bower'], function() {
  return gulp.src(bower_files()).pipe(gulp.dest('./vendor/bower'));
});

gulp.task('bower', function() {
  return bower();
});

gulp.task('scss', function() {
  return gulp.src(paths.scss).
    pipe(sass()).
    pipe(concat('style.css')).
    pipe(gulp.dest('www/css'));
});

gulp.task('recompile', function() {
  run_sequence('bower', 'bower-files', ['scss']);
});

gulp.task('default', ['recompile'], function() {
  gulp.watch(['bower.json'], ['bower-files']);
  gulp.watch(paths.scss,     ['scss']);
});
