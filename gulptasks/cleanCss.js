import gulp from 'gulp';
import purgecss from 'gulp-purgecss';

export const cleanCss = () => {
  return gulp.src('build/css/style.css')
    .pipe(purgecss({
      content: ['build/**/*.html']
    }))
    // .pipe(rename({
    //   suffix: '.clean'
    // }))
    .pipe(gulp.dest('build/css'))
};
