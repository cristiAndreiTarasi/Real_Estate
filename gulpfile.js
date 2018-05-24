const gulp      = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass        = require('gulp-sass'),
    cleanCSS    = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin    = require('gulp-imagemin'),
    smushit     = require('gulp-smushit'),
    reload      = browserSync.reload;

const src = {
    scss: 'app/scss/**/*.scss',
    css: 'app/css',
    html: 'app/*.html',
    img: 'app/img/*',
    dist: './dist/css'
};

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'imagemin'], function() {
    browserSync.init({
        server: 'app'
    });

    gulp.watch(src.scss, ['sass']);
    gulp.watch(src.html).on('change', reload);
});

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp
        .src(src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(src.css))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(src.dist))
        .pipe(reload({ stream: true }));
});

// Minify images
gulp.task('imagemin', function() {
    return gulp
        .src(src.img)
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('default', ['serve']);


