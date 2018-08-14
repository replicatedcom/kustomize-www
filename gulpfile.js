var gulp = require("gulp"),
    rev = require("gulp-rev"),
    path = require("path");

gulp.task('css', () =>
    gulp.src('themes/replicated-docs-theme/static/css/style.css', {base: path.join(process.cwd(), 'themes/replicated-docs-theme/static/css')})
        .pipe(rev())
        .pipe(gulp.dest('static/css'))  // write rev'd assets to build dir
        .pipe(rev.manifest(('manifest-css.json')))
        .pipe(gulp.dest('data')) // write manifest to build dir
);

gulp.task('js-staging', () =>
    gulp.src('themes/replicated-docs-theme/static/js/staging/autocomplete-search.js', {base: path.join(process.cwd(), 'themes/replicated-docs-theme/static/js/staging')})  
        .pipe(rev())
        .pipe(gulp.dest('static/js/staging'))  // write rev'd assets to build dir
        .pipe(rev.manifest(('manifest-js-staging.json')))
        .pipe(gulp.dest('data'))  // write manifest to build dir
);

gulp.task('js-prod', () =>
    gulp.src('themes/replicated-docs-theme/static/js/prod/autocomplete-search.js', {base: path.join(process.cwd(), 'themes/replicated-docs-theme/static/js/prod')})  
        .pipe(rev())
        .pipe(gulp.dest('static/js/prod'))  // write rev'd assets to build dir
        .pipe(rev.manifest(('manifest-js-prod.json')))
        .pipe(gulp.dest('data'))  // write manifest to build dir
);

gulp.task('default', [ 'css', 'js-staging', 'js-prod' ]);

