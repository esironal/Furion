var gulp = require('gulp'),
    concat = require('gulp-concat'),
    shell = require('gulp-shell');

gulp.task('css', function() {

});

gulp.task('js', function() {

});

gulp.task('build', ['js', 'css']);

gulp.task('server', shell.task('node app.js'));

gulp.task('watch', function() {
  gulp.watch('./app/src/js/*.js', 'js');
  gulp.watch('./app/src/sass/*.sass', 'css');
});

gulp.task('default', ['build', 'server', 'watch']);
