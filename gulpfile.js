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
    del([ build + '/*'])

    srcImages
      .pipe(jimp({
        '-mdpi': {
            scaleToFit: {width: 640, height: 640}, //Вписать изображение в 64х64
        },
        '-hdpi': {
            scale: 0.8, // 80%
        },
        '-resize640': {
            resize: {width: 640, height: 640}, // тупой ресайз
        },
        '-cover640': {
            cover: {width: 640, height: 640}, // замостить, или как оно там
        },

        //свистоперделки, смотри опции какие есть, и это не все!1
        '-1': {
            crop: { x: 100, y: 100, width: 200, height: 200 },
            invert: true,
            flip: { horizontal: true, vertical: true },
            gaussian: 2,
            blur: 2,
            greyscale: true,
            sepia: true,
            opacity: 0.5,
        },
        '-2': {
            resize: { width: 100, height: 100 },
            scale: 1.2,
            rotate: 90,
            brightness: 0.5,
            contrast: 0.3,
            type: 'bitmap'
        },
        '-3': {
            posterize: 2,
            dither565: true,
            background: '#ff0000',
            type: 'jpg'
        }
      }))
      .pipe(gulp.dest(build));
})

gulp.task('default', ['resize-images'])
