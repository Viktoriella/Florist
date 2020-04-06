var gulp = require("gulp");
var server = require("browser-sync").create();
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var svgstore = require("gulp-svgstore");
var rename = require("gulp-rename");

gulp.task("copy", function () {
  return gulp.src([
    "source/*.html",
    "source/fonts/*.{woff,woff2}",
    "source/img/**",
    "source/js/**"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("style", function() {
  return gulp.src("source/sass/style.scss")
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([
        autoprefixer()
    ]))
  .pipe(gulp.dest("build/css"))
  .pipe(server.stream());
});

gulp.task("sprite", function () {
  return gulp.src("source/img/ico-*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("html", function() {
  return gulp.src("source/*.html")
  .pipe(posthtml([
    include()
  ]))
  .pipe(gulp.dest("build"));
});

gulp.task("js", function(){
  return gulp.src("source/js/**")
  .pipe(gulp.dest("build/js"));
});

gulp.task("serve", function() {
  server.init({
    server: "build/"
  });
  gulp.watch("source/sass/**/*.{scss,sass}", gulp.parallel("style"));
  gulp.watch("source/*.html", gulp.parallel("html"))
    .on("change", server.reload);
  gulp.watch("source/js/**/*.js", gulp.parallel("js"))
    .on("change", server.reload);
});

gulp.task("build", gulp.series("copy", "sprite", "serve"));