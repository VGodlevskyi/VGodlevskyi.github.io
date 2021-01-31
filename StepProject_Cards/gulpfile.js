const gulp = require("gulp"),
   browserSync = require("browser-sync"),
   autoPrefix = require("gulp-autoprefixer"),
   clean = require("gulp-clean"),
   cleanCSS = require("gulp-clean-css"),
   concat = require("gulp-concat"),
   imageMin = require("gulp-imagemin"),
   sass = require("gulp-sass")

const paths = {
   src: {
      html: "src/index.html",
      styles: "src/scss/**/*.scss",
      js: "src/js/**/*.js",
      img: "src/img/**/*[jpg,png,svg,gif,webp]"
   },
   dist: {
      html: "dist",
      styles: "dist/css",
      js: "dist/js",
      img: "dist/img",
      dist: "dist"
   }
};

const cleanDist = () => (
   gulp.src(paths.dist.dist, {
      allowEmpty: true
   })
      .pipe(clean())
);

const buildHTML = () => (
   gulp.src(paths.src.html)
      .pipe(gulp.dest(paths.dist.html))
);

const buildCSS = () => (
   gulp.src(paths.src.styles)
      .pipe(sass().on('error', sass.logError))
      .pipe(concat("styles.min.css"))
      .pipe(autoPrefix({
         cascade: false
      }))
      .pipe(cleanCSS())
      .pipe(gulp.dest(paths.dist.styles))
);

const buildJS = () => (
   gulp.src(paths.src.js)
      .pipe(gulp.dest(paths.dist.js))
);

const buildImg = () => (
   gulp.src(paths.src.img)
      .pipe(imageMin())
      .pipe(gulp.dest(paths.dist.img))
);

const watcher = () => {
   browserSync.init({
      server: {
         baseDir: "./dist"
      },
      port: 5500,
   });

   gulp.watch("./src/**/*.html", buildHTML);
   gulp.watch("./src/scss/**/*.scss", buildCSS);
   gulp.watch("./src/js/**/*.js", buildJS);
   gulp.watch("./src/img/**/*.{jpg,png,svg,gif,webp}", buildImg);
   gulp.watch("./src/**/*.*").on('change', browserSync.reload);
};

gulp.task("html", buildHTML);
gulp.task("css", buildCSS);
gulp.task("js", buildJS);
gulp.task("img", buildImg);
gulp.task("build", gulp.series(
   cleanDist,
   buildHTML,
   buildCSS,
   buildJS,
   buildImg
));

gulp.task("dev", gulp.series("build", watcher));