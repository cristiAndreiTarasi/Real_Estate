const gulp      = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass        = require('gulp-sass'),
    reload      = browserSync.reload;

const src = {
    scss: 'app/scss/*.scss',
    css: 'app/css',
    html: 'app/*.html'
};

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
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
        .pipe(gulp.dest(src.css))
        .pipe(reload({ stream: true }));
});

gulp.task('default', ['serve']);


/*
const gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass   = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    browsersync = require('browser-sync');


// BrowserSync Task
gulp.task('browsersync', function() {
  return browsersync({
    server: {
      baseDir: './'
    }
  });
});

// Styles Task
gulp.task('styles', function() {
    return gulp.src('app/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'));
});

// Scripts Task
gulp.task('scripts', function() {
    return gulp.src('app/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Images Task
gulp.task('images', function() {
    return gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

// Watch Task
gulp.task('watch', function() {
    gulp.watch('app/css/*.css', ['styles', browsersync.reload]);
    gulp.watch('app/js/*.js', ['scripts', browsersync.reload]);
    gulp.watch('app/img/*', ['images', browsersync.reload]);
});

// Default Task
gulp.task('default', [
    'styles',
    'scripts',
    'images',
    'browsersync',
    'watch'
]);
*/
