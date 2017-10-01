'use trict';

const gulp = require("gulp");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const htmlmin = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");
const watch = require("gulp-watch");
const del = require("del");
const browserSync = require('browser-sync').create();


gulp.task("concatScripts", function() {
    return gulp.src(["src/js/dropHeader.js", "src/js/itemControls.js", "src/js/modals.js", "src/js/shareButton.js"])
        .pipe(sourcemaps.init())
        .pipe(concat("app.js"))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("src/js"));
});

gulp.task("minifyScripts", ["concatScripts"], function() {
    return gulp.src("src/js/app.js")
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename("app.min.js"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("build/js"));
});

gulp.task("compileSass", function() {
    return gulp.src("src/scss/application.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task("minifyCSS", function() {
    return gulp.src("src/css/application.css")
        .pipe(sourcemaps.init())
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/css'));
});

gulp.task("minifyHtml", function() {
    return gulp.src("/*.html")
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build/'));
});

gulp.task("minifyImg", function() {
    gulp.src("src/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("build/images"));
});

gulp.task("watch", function() {
    return gulp.watch('src/scss/**/*.scss', ["compileSass"]),
           gulp.watch("src/js/**/*.js", ["concatScripts"]);
});

gulp.task("clean", function() {
    del(["build", "build/css/application.css", "js/app*.js"]);
});

gulp.task("build", ["minifyScripts", "compileSass", "minifyCSS", "minifyImg", "minifyHtml", "clean"], function() {
    return gulp.src(["src/css/application.css", "src/js/app.min.js", "index.html", "fall-lookbook.html", "shop.html", "shop-planck-sunglasses.html", "shop-aviator-sunglasses.html", "src/images/*"], { base: "./" })
        .pipe(gulp.dest("build"));
});

gulp.task("serve", function() {
    //console.log("Task running...");
    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch('src/scss/**/*.scss', ["compileSass"]).on("change", function() {browserSync.reload()});
    gulp.watch("src/js/**/*.js", ["minifyScripts"]).on("change", function() {browserSync.reload()});
    gulp.watch("./**/*.html").on("change", function() {browserSync.reload()});
});


gulp.task("default", ["minifyScripts", "compileSass" ,"serve"], function() {});