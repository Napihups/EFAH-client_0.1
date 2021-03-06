const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');

//Compile Task
gulp.task('sass', function(){
    return gulp.src(['src/scss_v1/pixeladmin.scss']) // Target scss
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});


//watch & serve
gulp.task('serve', ['sass'], function(){
    browserSync.init({
        server: './src'
    });

    gulp.watch(['src/scss_v1/*.scss'], ['sass']);
    gulp.watch(['src/scss_v1/custom/*.scss'], ['sass']);
    gulp.watch(['src/scss_v1/themes/custom/*.scss'], ['sass']);
    gulp.watch(['public/*.html']).on('change', browserSync.reload);
});


//Default
gulp.task('default', ['serve']);