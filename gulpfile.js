var gulp = require('gulp'),
    del = require('del'),
    rename = require('gulp-rename'),
    jimp = require('gulp-jimp');

const src = './src';
const build = './build';

//Задача
gulp.task('resize-images', () => {
    const srcImages =
        gulp.src( src + '/*')

    //Очищаем содержимое
    del.sync([ build + '/*'])

	srcImages
      .pipe(jimp({
        '': {
            scale: 0.33, // 33%
        }
      }))
      .pipe(gulp.dest(build + "/mdpi"));

    srcImages
      .pipe(jimp({
        '': {
            scale: 0.5, // 50%
        }
      }))
      .pipe(gulp.dest(build + "/hdpi"));

    srcImages
      .pipe(jimp({
        '': {
            scale: 0.66, // 66%
        }
      }))
      .pipe(gulp.dest(build + "/xhdpi"));
   
})

gulp.task('default', ['resize-images'])
