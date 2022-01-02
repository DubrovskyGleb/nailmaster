import jsmin from "gulp-jsmin";

export const js = () => {
    return app.gulp.src(app.path.src.js, { soursemaps: true })
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(jsmin())
        .pipe(app.plugins.rename({
            extname: ".min.js"
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
}