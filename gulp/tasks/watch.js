const gulp = require("gulp"),
    watch = require("gulp-watch"),
    browserSync = require("browser-sync").create();

gulp.task("watch", () => {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch("./app/index.html", () => {
        browserSync.reload();
    });

    watch("./app/assets/styles/**/*.css", () => {
        gulp.start("cssInject");
    });
});

// before we run the css inject task, we must complete the 'styles' task first
gulp.task("cssInject", ["styles"], () => {
    return gulp.src("./app/temp/styles/styles.css").pipe(browserSync.stream());
});
