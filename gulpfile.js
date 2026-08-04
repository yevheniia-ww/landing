const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function styles() {
  return src("scss/style.scss")
    .pipe(
      sass({
        outputStyle: "expanded",
      }).on("error", sass.logError)
    )
    .pipe(dest("css"));
}

function watchFiles() {
  watch("scss/**/*.scss", styles);
}

exports.styles = styles;
exports.watch = watchFiles;
exports.default = series(styles, watchFiles);