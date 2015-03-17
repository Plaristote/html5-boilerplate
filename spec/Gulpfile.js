var gulp    = require('gulp');
var gulp_if = require('gulp-if');
var coffee  = require('gulp-coffee');
var jasmine = require('gulp-jasmine-phantom');
var concat  = require('gulp-concat');

var paths = [
    '../www/js/application.js',
    'src/**/*.js',
    'src/**/*.coffee'
];

function setupJasmine() {
  return gulp.src(paths).
     pipe(gulp_if(/[.]coffee$/, coffee())).
     pipe(concat('spec.js')).
     pipe(gulp.dest('.')).
     pipe(jasmine({ integration: true, abortOnFail: true }));
}

gulp.task('tests', function() {
  return setupJasmine().
     on('error', process.exit.bind(process, 1));
});

gulp.task('tests-no-exit', function() {
  return setupJasmine();
});

gulp.task('default', function() {
  gulp.watch(paths, ['tests-no-exit']);
});
