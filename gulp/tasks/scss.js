'use strict';
import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import size from "gulp-size";
import shorthand from "gulp-shorthand";

import cleanCss from "gulp-clean-css"; // CSS compression
import webpCss from "gulp-webpcss"; // WebP images output
import autoPrefixer from "gulp-autoprefixer"; // Add vendor prefixes
import gcmq from "gulp-group-css-media-queries"; // Group CSS media queries

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SCSS",
        message: "Error: <%= error.message %>",
      }))
    )
    .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(sass({
      outputStyle: "expanded"
    }))
    .pipe(
      app.plugins.if(
        app.isBuild,
        gcmq()
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        webpCss({
          webpClass: ".webp",
          noWebpClass: ".no-webp",
        })
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        autoPrefixer({
          grid: true,
          overrideBrowsersList: ["last 3 versions"],
          cascade: true,
        })
      )
    )
    .pipe(shorthand())
    .pipe(size({
      title: "Before CSS compression"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(
      app.plugins.if(
        app.isBuild,
        cleanCss()
      )
    )
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(size({
      title: "After CSS compression"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream());
};