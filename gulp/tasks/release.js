module.exports = function () {   

  $.gulp.task('rel', $.gulp.series(   
  	'rel-del',
    'js-rel',
    'html-rel',
     $.gulp.parallel(
		  'video-rel',
      'images-rel',
      'sass-rel',
      'fonts-rel',
     )
  ));
};