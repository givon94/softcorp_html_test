const htmlImport = require('gulp-html-import');
const htmlmin = require('gulp-html-minifier');


module.exports = function () {
	$.gulp.task('html', () => {
		return $.gulp.src('./src/html/*.html')
		.pipe(htmlImport('./src/html/components/'))
    	.pipe($.gulp.dest($.ppath.SRC))
	});

	$.gulp.task('html-rel', () => {
		return $.gulp.src('./src/html/*.html')
			.pipe(htmlImport('./src/html/components/'))
			.pipe(htmlmin({collapseWhitespace: true}))
			.pipe($.gulp.dest($.ppath.DIST))
	});
};
