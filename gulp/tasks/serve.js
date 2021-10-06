module.exports = function () {
    $.gulp.task('serve', function() {
        $.browserSync.init({
                open: true, //открывать автоматически браузер
                server: './src'
        });
    $.browserSync.watch('./src', $.browserSync.reload);
    });
};