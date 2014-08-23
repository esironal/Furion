/**
 * gulpfile.js
 *
 * @author fantasy <fantasyshao@icloud.com>
 * @create 2014-08-21
 * @update 2014-08-23
 */

var gulp = require('gulp');

var sass       = require('gulp-ruby-sass'),
    concat     = require('gulp-concat'),
    uglify     = require('gulp-uglify'),
    bowerFiles = require('main-bower-files'),
    shell      = require('gulp-shell');

var paths = {
  'sass': './app/src/sass/main.sass',
  'js': './app/src/js/*.js'
};

// compile sass file
gulp.task('sass', function() {
  gulp.src(paths.sass)
    .pipe(sass({style: 'compressed', noCache: true}))
    .pipe(gulp.dest('./app/dest/css'));
});

// concat bower dependencies
gulp.task('dependence-js', function() {
  return gulp.src(bowerFiles())
    .pipe(concat('dependencies.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./app/dest/js'));
});

// concat and uglify js files
gulp.task('js', function() {
  gulp.src(paths.js)
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./app/dest/js'));
});

gulp.task('watch', function() {
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('build', ['dependence-js', 'js', 'sass']);

gulp.task('server', shell.task('node app.js'));

gulp.task('default', ['build', 'server', 'watch']);
