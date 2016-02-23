// react bootstrap sass starter
var gulp = require('gulp');
var bower = require('gulp-bower');
var browserify = require('browserify');
var babelify = require('babelify');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var sass = require('gulp-ruby-sass');
var notify = require('gulp-notify');

//tasks requires public and test directories for processed files.
gulp.task('jsx', function () {
  browserify({
    entries: './src/js/main.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify, {
    presets:["es2015", "react"]
  })
  .bundle()
  .pipe(source('js/bundle.js'))
  .pipe(buffer())
  .pipe(gulp.dest('./public'))
  .pipe(rename('js/bundle.min.js'))
  .pipe(sourcemaps.init({ loadMaps: true }))
  // capture sourcemaps from transforms
  .pipe(uglify())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./public'));
});

gulp.task('icons', function(){
  // bower for bootstrap and font-awesome font icons yummy
    var fontList = [
          './bower_components/bootstrap-sass-official/assets/fonts/*/**.*',
          './bower_components/font-awesome/fonts/**.*'

        ];
    return gulp.src(fontList)
    .pipe(gulp.dest('./public/fonts'));
});

gulp.task('css', function() { 
  // Using bower to grab sass versions of bootstrap , font-awesome and bootswatch
  return sass('./src/style/sass/style.scss', {
          style: 'compressed',
          loadPath: [
            './style/sass',
            './bower_components/bootstrap-sass-official/assets/stylesheets/',
            './bower_components/font-awesome/scss/',
            './bower_components/bootswatch-sass/cyborg/'
          ]
      })
      .pipe(gulp.dest('public/css'));

});

gulp.task('index-html', function() {
// move index.html to public
    gulp.src('./src/index.html')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {
    gulp.watch('./src/style/sass/**/*.scss', ['css']);
    gulp.watch('./src/js/*.jsx', ['jsx']);
    gulp.watch('./src/index.html', ['index-html']);
});

//setup task bower
gulp.task('bower', function() {
  return bower()
});

gulp.task('default', ['jsx','icons','css','index-html','watch']);
