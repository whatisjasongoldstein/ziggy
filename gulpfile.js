// Build tools
const gulp = require('gulp');
const del = require('del');
const browserSync = require('browser-sync');

// HTML
const nunjucksRender = require('gulp-nunjucks-render');
const { manageEnvironment } = require('./template');

// CSS
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const server = browserSync.create();

const destinations = {
  dev: '.tmp',
  dist: 'docs',
}

const createHTML = (dest) => {
  return gulp.src('src/templates/pages/**/*.html')
    .pipe(nunjucksRender({
      path: [
        'src/templates/',
        'src/markdown/',
      ],
      manageEnv: manageEnvironment,
    })).on('error', (e) => {
      console.error(`Nunjucks error! 🤬`)
      console.error(e.message);
      console.error(e.fileName);
    })
    .pipe(gulp.dest(dest))
}

const createCSS = (dest) => {
  return gulp.src(['src/**/*.scss'])
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(dest))
}

const createJS = (dest) => {
  return gulp.src(['src/**/*.js'])
    .pipe(gulp.dest(dest))
}

const createImages = (dest) => {
  return gulp.src(['src/**/*.{jpg,jpeg,png,svg}'])
    .pipe(gulp.dest(dest))
}


const clean = (dest) => {
  return del([
    `${ dest }/*`,
    `!${ dest }/CNAME`,
  ]);
}

const copyLibs = (dest) => {
  return gulp.src([
    'node_modules/lazysizes/lazysizes.min.js',
  ]).pipe(gulp.dest(`${ dest }/lib`));
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

  return await Promise.all([
    createImages(dest),
    createHTML(dest),
    createCSS(dest),
    createJS(dest),
    copyLibs(dest),
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
    notify: true,
    port: 9000,
    open: false,
    startPath: '/',
    server: {
      baseDir: ['.tmp']
    }
  }, done);

});

gulp.task('default', gulp.series(['develop']));