/*
 * Project - Letstart - Onepage template
 * Author - LettStart Design
 */

var gulp = require('gulp'); //default
var browserSync = require('browser-sync').create();



gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: './'
        },
    })
    gulp.watch('assets/css/**/*.css', browserSync.reload);
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('assets/js/*.js', browserSync.reload);
});
