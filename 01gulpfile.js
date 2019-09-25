/*
    文件目录的拷贝和删除
*/

let gulp = require("gulp");

let app = {
    src:"./src",
    dist:"./dist"
}

//实现src拷贝至dist/src

gulp.task("copy1",function(done){
    //拷贝src目录
    // gulp.src(app.src)
    //     .pipe(gulp.dest(app.dist));

    //拷贝src目录下的文件至dist
    // gulp.src(app.src + "/*")
    //     .pipe(gulp.dest(app.dist));

    //将src目录及目录下的子文件拷贝到dist
    // gulp.src(app.src)
    //     .pipe(gulp.dest(app.dist));
    // gulp.src(app.src + "/*")
    //     .pipe(gulp.dest(app.dist + "/src"));

    //将src目录及目录下的所有内容都拷贝到dist
    gulp.src(app.src)
        .pipe(gulp.dest(app.dist));
    gulp.src(app.src + "/**")
        .pipe(gulp.dest(app.dist + "/src"));
        done();
    });
    
//实现选择拷贝
gulp.task("copy2",function(done){

    //将src下的js与css目录拷贝到了dist文件中
    // gulp.src(app.src + "/js")
    //     .pipe(gulp.dest(app.dist));
    // gulp.src(app.src + "/css")
    //     .pipe(gulp.dest(app.dist));
    
    
    //将src下的js与css目录及内容拷贝到了dist文件中
    gulp.src(app.src + "/js")
        .pipe(gulp.dest(app.dist));
    gulp.src(app.src + "/css")
        .pipe(gulp.dest(app.dist));
    gulp.src(app.src + "/js/**")
        .pipe(gulp.dest(app.dist + "/js"));
    gulp.src(app.src + "/css/**")
        .pipe(gulp.dest(app.dist + "/css"));
    done();
});


//[]组合：实现一组指定内容
//!剔除：不需要的内容

//将src目录下的内容拷贝到dist
gulp.task("copy3",function(done){
    gulp.src([`${app.src}/*`,`${app.src}/js`,`${app.src}/css`])
    .pipe(gulp.dest(app.dist))
    done();
});


//只要导出项目中的所有页面
gulp.task("copy4",function(done){
    gulp.src([`${app.src}/*.html`,`${app.src}/*.htm`])
    .pipe(gulp.dest(app.dist))
    done();
});

//方法二：
//枚举{}：指定的几个值
gulp.task("copy5",function(done){
    gulp.src(`${app.src}/**/*.{htm,html}`)
    .pipe(gulp.dest(app.dist))
    done();
});

//实现删除功能
//npm i gulp-clean --save-dev

let clean = require("gulp-clean");
//删除内容（保留目录）
gulp.task("clean1",function(done){
    gulp.src(app.dist + "/*")
        .pipe(clean());
    done();
});

//选择删除
gulp.task("clean2",function(done){
    gulp.src(`${app.dist}/**/*.{htm,html}`)
        .pipe(clean());
    done();
});

//删除目录
gulp.task("clean3",function(done){
    gulp.src(app.dist)
        .pipe(clean());
    done();
});

