// Build tools
import gulp from 'gulp';
import del from 'del';
import browserSync from 'browser-sync';

// HTML
import nunjucksRender from 'gulp-nunjucks-render';
import { manageEnvironment } from './template';

// CSS
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';

const server = browserSync.create();

const destinations = {
  dev: '.tmp',
  dist: 'docs',
}

const createHTML = (dest) => {
  return gulp.src('src/templates/pages/**/*.html')
    .pipe(nunjucksRender({
      path: ['src/templates/'],
      manageEnv: manageEnvironment,
    }))
    .pipe(gulp.dest(dest))
}

const createCSS = (dest) => {
  return gulp.src(['src/**/*.scss'])
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(dest))
}

const createJS = (dest) => {
  return gulp.src(['src/**/*.js'])
    .pipe(gulp.dest(dest))
}

const clean = (dest) => {
  return del([`${ dest }/*`]);
}

/**
 * Make browsersync.reload work with Gulp 4
 * @See: https://github.com/gulpjs/gulp/issues/1626
 */
function reload(done) {
  server.reload();
  return done();
}


const build = async (dest) => {
  await clean(dest);
  return Promise.all([
    createHTML(dest),
    createCSS(dest),
    createJS(dest),
  ])
}

gulp.task('dist', () => {
  return build(destinations.dist);
})

gulp.task('develop', async (done) => {
  await build(destinations.dev);

  gulp.watch('src/**/*', gulp.series([
    () => build(destinations.dev),
    reload,
  ]));

  server.init({
    notify: false,
    port: 9000,
    open: true,
    startPath: '/',
    server: {
      baseDir: ['.tmp']
    }
  }, done);

});

gulp.task('default', gulp.series(['develop']));