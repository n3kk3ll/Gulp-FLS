'use strict';
import fileinclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";
import htmlmin from "gulp-htmlmin";
import size from "gulp-size";

export const html = () => {
  return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "HTML",
        message: "Error: <%= error.message %>",
      }))
    )
    .pipe(fileinclude())
    .pipe(app.plugins.replace(/@img\//g, "img/"))
    .pipe(app.plugins.if(
      app.isBuild,
      webpHtmlNosvg()
    ))
    .pipe(
      app.plugins.if(
        app.isBuild,
        versionNumber({
          "value": "%DT%",
          "append": {
            "key": "_v",
            "cover": 0,
            "to": [
              "css",
              "js",
            ]
          },
          "output": {
            "file": "gulp/version.json",
          },
        })
      )
    )
    .pipe(size({
      title: "Before HTML compression"
    }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(size({
      title: "After HTML compression"
    }))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
};