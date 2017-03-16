/**
 * Created by melo on 2017/3/16.
 */
var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('toES6',function(){
    return gulp.src('es6/src/*.js')
        .pipe(babel())
        .pipe(gulp.dest('es6/dist'));
});

gulp.task('default',['toES6']);