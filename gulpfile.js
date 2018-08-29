var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
//var watch = require('gulp-watch');
//

gulp.task('browser-sync', ['scripts'], function() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('./index.html', './app/*').on('change', browserSync.reload);
});

gulp.task('scripts', function() {
	return gulp.src(['./app/app.module.js', './app/app.routes.js', './app/**/*js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./assets/js/'));
});

gulp.task('default', ['browser-sync']);