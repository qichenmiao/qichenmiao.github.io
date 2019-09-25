let gulp = require("gulp");

let app = {
    src:"./bootstrap",
    dist:"./bootstrap"
}

//复制fonts文件及内容
gulp.task("copy",function(done){
    gulp.src(`${app.src}/fonts/*`)
        .pipe(gulp.dest(`${app.dist}/dist/fonts`));
    done();
})


//压缩js目录下的内容并到dist中bootstrap.min.js
let {default:jsmin} = require("gulp-uglify-es");
let concat = require("gulp-concat");

gulp.task("jsmin",function(done){
    gulp.src(`${app.src}/js/*.js`)
        .pipe(concat("bootstrap.min.js"))
        .pipe(jsmin())
        .pipe(gulp.dest(`${app.dist}/dist/js`));
    done();
})


//将less目录中的bootstrap.less编译成.css到dist目录bootstrap.min.css
let less = require("gulp-less");
let cssmin = require("gulp-cssmin")
let rename = require("gulp-rename");
gulp.task("less",function(done){
    gulp.src(`${app.src}/less/bootstrap.less`)
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename("bootstrap.min.css"))
        .pipe(gulp.dest(`${app.dist}/dist/css`));
    done();
})