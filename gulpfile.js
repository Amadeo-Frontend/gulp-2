const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require('gulp-image')



function tarefasCSS(cb) {

    return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
            './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
            './vendor/owl/css/owl.css',
            './vendor/jquery-ui/jquery-ui.css',
            './src/css/style.css'
    ])
        .pipe(concat('styles.css'))
        .pipe(cssmin())
        .pipe(rename({suffix:'.min'})) //libs.min.css
        .pipe(gulp.dest('.dist/css'))

}

function tarefasJS() {

    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
            './node_modules/bootstrap/dist/js/bootstrap.js',
            './vendor/owl/js/owl.js',
            './vendor/jquery-mask/jquery.mask.js',
            './vendor/jquery-ui/jquery-ui.js',
            './src/js/custom.js'
    ])
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({suffix:'.min'})) //libs.min.js
        .pipe(gulp.dest('.dist/js'))

}
function tarefasImagem() {

    return gulp.src('./src/images/*')
        .pipe(image({
            pngquant:true,
            optipng:false,
            zopflipng:true,
            jpegRecompress:false,
            mozjpeg:true,
            gifsicle:true,
            svgo:true,
            concurrent:10,
            quiet:true
        }))
        
        .pipe(gulp.dest('.dist/images'))
}

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem