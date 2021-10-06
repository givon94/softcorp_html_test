global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),
    
    ppath: {
      SRC:      './src/',
      DIST:     './dist/',

      css: {
        src:    'scss/**/*.scss',
        dest:   'css/'
      },
      html: {
        src:    'html/**/*.html',
      },
      images: {
        src:    'img/**/*.+(jpg|png|webp|gif|svg)',
        dest:   'img/'
      },
      imagesOther: {
        src:    'img/**/*.+(webp|gif)',
        dest:   'img/'
      },
      video: {
        src:    'video/**/*.+(mp4|webm)',
        dest:   'video/'
      },
      svg: {
        src:    'img/**/*.svg',
        dest:   'img/'
      },

      fonts: {
        src:    'fonts/**/*.+(svg|eot|ttf|woff|woff2)',
        dest:   'fonts/'
      },
       js: {
        src:    'js/**/*.js',
        dest:   'js/'
      }
    }
};


$.path.task.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
   $.gulp.parallel(
       'html',
       'sass',
       'js'
   ),
   $.gulp.parallel(
       'watch',
       'serve'
   )
));
