module.exports = function () {
	$.gulp.task('images-rel', () => {
		return $.gulp.src($.ppath.SRC + $.ppath.images.src)
		.pipe($.gp.image({
  			optipng: ['-i 1', '-strip all', '-fix', '-o7', '-force'],
  			pngquant: ['--speed=1', '--force', 128],
  			zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
  			jpegRecompress: ['--strip', '--quality', 'medium', '--min', 65, '--max', 80],
  			mozjpeg: false,
  			guetzli: false,
  			gifsicle: ['--optimize'],
  			svgo: ['--enable', 'cleanupIDs', '--disable', 'convertColors'],
  			quiet: true
		}))

    	.pipe($.gulp.dest($.ppath.DIST + $.ppath.images.dest))        
	});
};



// pngquant: ['--speed=1', '--force', 192],
// pngquant: ['--speed=1', '--force', 256],
// jpegRecompress: ['--strip', '--quality', 'medium', '--min', 60, '--max', 70],