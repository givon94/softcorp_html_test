const gcmq = require('gulp-group-css-media-queries');

let REL_DIR_HTML = 'dist/*.html',
    REL_DIR_JS = 'dist/js/*js';

module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src($.ppath.SRC + $.ppath.css.src)
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .on('error', $.gp.notify.onError({
                title: 'Style'
            }))
            .pipe($.gp.autoprefixer({
                cascade: false
            }))
            .pipe($.gp.csso())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest($.ppath.SRC + $.ppath.css.dest));
    });

    $.gulp.task('sass-rel', function () {
        return $.gulp.src($.ppath.SRC + $.ppath.css.src)          
            .pipe($.gp.sass())
            .on('error', $.gp.notify.onError({
                title: 'Style'
            }))
    		.pipe($.gp.purgecss({
    			content: [REL_DIR_HTML, REL_DIR_JS],
    			fontFace: false,
    			keyframes: true
    			//safelist: ['random', 'yep', 'button'],
			    // safelist: {
      			//standard: [/red$/],
      			//deep: [/blue$/],
      			//greedy: [/yellow$/]
    			// }
    		}))
            .pipe($.gp.autoprefixer({
                cascade: false
            }))
            .pipe(gcmq())
            .pipe($.gp.csso())            
            .pipe($.gulp.dest($.ppath.DIST + $.ppath.css.dest));
    });
};



/* purgecss start ignore */
/* purgecss end ignore */


/* purgecss ignore */