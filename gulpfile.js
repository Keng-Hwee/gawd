const gulp = require("gulp");
const watch = require("gulp-watch");

gulp.task("default", () => {
    console.log("Awesome");
});

gulp.task("customTask", () => {
    console.log("this will execute a custom task");
});

gulp.task("styles", () => {
    console.log("Run some postcss task");
});

gulp.task("watch", () => {
    watch("./app/index.html", () => {
        gulp.start("customTask");
    });

    watch(".app/assets/styles/**/*.css", () => {
        gulp.start("styles");
    });
});
