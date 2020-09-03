const {src, dest, watch} = require("gulp"),
    browserSync = require("browser-sync").create(),
    sass = require('gulp-sass'),
    clean = require("gulp-clean"),
    cleanCSS = require('gulp-clean-css'),
    minifyjs = require("gulp-js-minify");
autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin');

const path = {
    src: {
        server: "./src",
        styles: "./src/scss",
        js: "./src/js",
        img: "./src/img",
    },
    dest: {
        server: "./dist/",
        styles: "./dist/css",
        js: "./dist/js",
        img: "./dist/img",
    },
};

const serve = function () {
    browserSync.init({
        server: {
            baseDir: "./",
        },
        port: 5500,
        browser: "firefox",
    });
};
const cleanDir = function () {
    return src('dist/*', {read: false})
        .pipe(clean());
};

const scss2css = function () {
    return src('src/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on("error", sass.logError))
        .pipe(autoprefixer({cascade: false}))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('dist'))
};

const scripts = function () {
    return src(path.src.server + "/**/*.js")
        .pipe(concat("scripts.js"))
        // .pipe(minifyjs())
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(dest(path.dest.js));
};
const imgMin = function () {
    return src(path.src.img + "/**/*.png")
        .pipe(imagemin())
        .pipe(dest(path.dest.img))
};
const build = function (cb) {
    cleanDir();
    scss2css();
    scripts();
    imgMin();
    browserSync.reload({stream: true});
    cb();
};

const dev = function () {
    serve();
    watch(path.src.js + "/**/*.js", function (cb) {
        scripts();
        browserSync.reload();
        cb();
    });
    watch(path.src.styles + "/**/*.scss", function (cb) {
        scss2css();
        browserSync.reload();
        cb();
    });
    watch("./index.html", function (cb) {
        browserSync.reload();
        cb();
    });
};

exports.build = build;
// Задача build иногда срабатывает со второго раза.Почему?
exports.dev = dev;

exports.default = dev;
