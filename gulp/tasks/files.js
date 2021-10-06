module.exports = function () {
    $.gulp.task('fonts-rel', () => {
        return $.gulp.src($.ppath.SRC + $.ppath.fonts.src)            
            .pipe($.gulp.dest($.ppath.DIST + $.ppath.fonts.dest))
    });

    $.gulp.task('video-rel', () => {
        return $.gulp.src($.ppath.video.src)            
            .pipe($.gulp.dest($.ppath.DIST + $.ppath.video.dest))
    });

    $.gulp.task('imagesOther-rel', () => {
        return $.gulp.src($.ppath.imagesOther.src)            
            .pipe($.gulp.dest($.ppath.DIST + $.ppath.imagesOther.dest))
    });

    $.gulp.task('php-rel', () => {
        return $.gulp.src($.ppath.php.src)            
            .pipe($.gulp.dest($.ppath.DIST + $.ppath.php.dest))
    });
};