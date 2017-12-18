var gulp = require('gulp'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	combineMq = require('gulp-combine-mq'),
	imagemin = require('gulp-imagemin'),
	newer = require('gulp-newer'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	pug = require('gulp-pug'),
	livereload = require('gulp-livereload'),
	gulpif = require('gulp-if'),
	runSequence = require('run-sequence'),
	del = require('del'),
	notify = require("gulp-notify"),
	plumber = require('gulp-plumber'),
	gcmq = require('gulp-group-css-media-queries');


var paths = {
	sass: 'src/assets/scss/**/*.scss',
	js: 'src/assets/js/**/*.js',
	img: 'src/assets/img/**/*',
	fonts: 'src/assets/fonts/**/*',
	content: [
		'src/page-content/**/*',
		'src/page-content/**/.*',
		"!src/page-content/.DS_Store",
		"!src/page-content/partials",
		"!src/page-content/partials/*",
		"!src/page-content/base",
		"!src/page-content/base/*"
	],
	distCss: 'dist/css',
	distJs: 'dist/js',
	distImg: 'dist/img',
	distContent: 'dist/',
	distFont: 'dist/fonts',
	dist: 'dist'
};


var watch = {
	js: [
		paths.js
	],
	sass: [
		paths.sass
	],
	img: [
		paths.img
	],
	fonts: [
		paths.fonts
	],
	content: [
		// paths.content
		'src/page-content/**/*',
		'src/page-content/**/.*',
		"!src/page-content/.DS_Store",
		"!src/page-content/base/.DS_Store",
		"!src/page-content/partials/.DS_Store",
	]
};

var distMode = false;

// Pug, kirby, wp,
var techProject = 'html';


var sassOptions = {
	errLogToConsole: true,
	outputStyle: 'expanded'
};

// Compile css file. If dev uncompress if dist compressed
gulp.task('sass', function () {
	return gulp.src(paths.sass )
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %> 💩")}))
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(autoprefixer({
						browsers: ['last 2 versions'],
						cascade: false
				}))
		.pipe(gcmq())
		.pipe(gulpif(distMode == true,cssnano()))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(paths.distCss))
		.pipe(livereload())
		.pipe(notify({message: 'Styles OK 🦄', onLast: true}));
});

gulp.task('js', function(){
	return gulp.src(paths.js)
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %> 💩")}))
		.pipe(gulp.dest(paths.distJs))
		.pipe(livereload())
		.pipe(notify({message: 'JS OK 🦄', onLast: true}));

});

gulp.task('images', function() {
	return gulp.src(paths.img)
		.pipe(gulpif(distMode == false,
			newer(paths.distImg)
		))
		.pipe(gulpif(distMode === false,
			imagemin(),
			imagemin({
				progressive: true,
				svgoPlugins: [{
						removeViewBox: false
				}],
			})))
		.pipe(gulp.dest(paths.distImg))
		.pipe(notify({message: 'Images in the folder 🦄', onLast: true}));

});

gulp.task('fonts', function() {
	return gulp.src(paths.fonts)
		.pipe(gulpif(distMode === false,
			newer(paths.distFont)
		))
		.pipe(gulp.dest(paths.distFont))
		.pipe(notify({message: 'Fonts in the folder 🐥', onLast: true}));
});

gulp.task('content', function(){
	return gulp.src(paths.content)
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %> 💩")}))
		.pipe(gulp.dest(paths.distContent))
		.pipe(notify({message: 'HTML OK 💃', onLast: true}));

});

gulp.task('clean', function() {
	return del([
		paths.dist
	]);
});

gulp.task('watch', function () {
	livereload.listen();
	gulp.watch(watch.sass, { interval: 500 }, ['sass']);
	gulp.watch(watch.js, { interval: 500 }, ['js']);
	gulp.watch(watch.img, { interval: 500 }, ['images']);
	gulp.watch(watch.fonts, { interval: 2500 }, ['fonts']);
	gulp.watch(watch.content, { interval: 500 }, ['content']);
});

// Default task, watching changes and launching actions
gulp.task('default', ['watch']);


gulp.task('dist', function(){
	distMode = true;
	runSequence(
		'clean',
		['js', 'sass', 'images', 'fonts', 'content']
	);
})
