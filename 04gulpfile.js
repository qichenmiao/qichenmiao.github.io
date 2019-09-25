let gulp = require("gulp");

let app = {
    src:"./src",
    dist:"./dist"
}

//html压缩
//npm i gulp-htmlmin --save-dev
let htmlmin = require("gulp-htmlmin");
gulp.task("htmlmin",function(done){
    gulp.src(`${app.src}/**/*.{html,htm}`)
        .pipe(htmlmin({
            removeComments:true,
            collapseWhitespace:true,
            collapseBooleanAttributes:true
        }))
        .pipe(gulp.dest(app.dist));

    done();
});

//css压缩
//npm i gulp-cssmin -D
let cssmin = require("gulp-cssmin");
gulp.task("cssmin",function(done){
    gulp.src(`${app.src}/**/*.css`)
        .pipe(cssmin())
        .pipe(gulp.dest(app.dist));

    done();
});

//js压缩混淆
//npm i gulp-uglify-es -D
let {default:jsmin} = require("gulp-uglify-es");
gulp.task("jsmin",function(done){
    gulp.src(`${app.src}/**/*.js`)
        .pipe(jsmin())
        .pipe(gulp.dest(app.dist));

    done();
});

//文件重命名（实现src拷贝到bak目录下，所有文件后缀名都附加一个.bak）
//npm i gulp-rename -D
let rename = require("gulp-rename");
gulp.task("rename",function(done){
    gulp.src(`${app.src}/**`)
        .pipe(rename(function(target,info){
            if((JSON.stringify(info)).indexOf("Buffer")!=-1){
                target.extname += ".bak";
            }
        }))
        .pipe(gulp.dest(`${app.dist}/bak`));

    done();
});


//文件合并
//npm i gulp-concat -D
let concat = require("gulp-concat");
gulp.task("concat",function(done){
    gulp.src(`${app.src}/**/*.css`)
        .pipe(concat("all.css"))
        .pipe(cssmin())
        .pipe(gulp.dest(app.dist));

    done();
});


//less编译
//npm i gulp-less -D
let less = require("gulp-less");
//将src/less/*.less编译到dist/css/*.css
gulp.task("less",function(done){
    gulp.src(`${app.src}/less/*.less`)
        .pipe(less())
        .pipe(gulp.dest(app.dist + "/css"));
    done();
});


gulp.task("less1",function(done){
    gulp.src(`${app.src}/less/*.less`)
        .pipe(less())
        .pipe(concat("all.css"))
        .pipe(cssmin())
        .pipe(gulp.dest(app.dist + "/css"));
    done();
});
