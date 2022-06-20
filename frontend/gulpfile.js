const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

// function buildStyles() {
//   return src('sass/**/*.scss')
//     .pipe(sass({ outputStyle: 'compressed' }))
//     .pipe(purgecss({ content: ['*.html', '*.js'] }))
//     .pipe(dest('css'))
// }
function buildStyles() {
  return src('scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    // .pipe(purgecss({ content: ['*.html', '*.js'] }))
    .pipe(dest('src/css'))
}

function watchTask() {
  watch(['scss/**/*.scss', 'scss-theme-design/**/*.scss','*.html', '*.js'], buildStyles)
}

exports.default = series(buildStyles, watchTask)