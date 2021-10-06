const jsFiles = [
  "./src/js/components/main.js"
];
   
module.exports = function () {        
  
  $.gulp.task('js-rel', () => {
      return $.gulp.src(jsFiles, {base: './src/js'})  
        .pipe($.gp.concat('build.js'))  
        .pipe($.gp.plumber())  
        .pipe($.gp.babel({
        presets: [
          ['@babel/env', {
            modules: false
          }]
        ]
        }))
        .pipe($.gp.uglify())
      .pipe($.gulp.dest($.ppath.DIST + $.ppath.js.dest));
    });

  $.gulp.task('js', () => {
       return $.gulp.src(jsFiles, {base: './src/js'})
        .pipe($.gp.concat('build.js'))
        .pipe($.gp.plumber())  
        .pipe($.gp.babel({
        presets: [
          ['@babel/env', {
            modules: false
          }]
        ]
        }))
        .pipe($.gulp.dest($.ppath.SRC + $.ppath.js.dest));
    });
};