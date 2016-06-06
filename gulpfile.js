var gulp = require('gulp');
var notify = require('gulp-notify');
var minifyCss = require('gulp-minify-css');
var minify = require('gulp-minify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var paths = {
  sass:['css/sass/**/*.sass'],
  script:['js/common.js', 'libs/**/*.js']
};

gulp.task('sass', function () {
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
	 .pipe(notify({
	  onLast: true,
		message: 'Done! Sass...'
	 }));
});

gulp.task('mincss', function(){
	return gulp.src(paths.sass)
	.pipe(sass().on('error', sass.logError))
	.pipe(minifyCss())
	.pipe(gulp.dest('css'))
	.pipe(concat('style.css'))
	.pipe(gulp.dest('dist'))
	 .pipe(notify({
	  onLast: true,
		message: 'Done! MinCSS...'
	 }));
});

gulp.task('minscripts', function(){
  return gulp.src(paths.script)
    .pipe(minify())
    .pipe(gulp.dest('libs/scripts'))
	 .pipe(notify({
	  onLast: true,
		message: 'Done! MinScripts...'
	 }));	
});

gulp.task('watcher',function(){
	gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['watcher'] );