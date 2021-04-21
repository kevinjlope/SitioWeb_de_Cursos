const gulp = require("gulp")
const sass = require("gulp-sass")
const autoprefixer = require("gulp-autoprefixer")

function css(){
    return gulp
        .src("scss/app.scss")
        .pipe(autoprefixer({
            overrideBrowsersList: ["last 2 versions"],
            cascade: false
        }))
        .pipe(sass ({
            outputStyle: "expanded", //nested, compact, compressed => compressed se utiliza para ser mas optimo la hoja de estilos
        }))
        .pipe( gulp.dest("css")); //pipe --> se lo puede entender como que ejecuta una funciona, termina y continua con la otra
}

function watchFiles(){
    gulp.watch('scss/*.scss', css)
    gulp.watch('index.html');
}
//Registrar funciones como tareas
gulp.task("css", css);
gulp.task('watch', gulp.parallel(watchFiles)) //parallel --> permite ejecutar las dos al mismo tiempo