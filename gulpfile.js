'use strict';
import gulp from "gulp"; // Main module
import { path } from "./gulp/config/path.js"; // Path import
import { plugins } from "./gulp/config/plugins.js"; // Path import

global.app = { // Import values to global variable
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path,
  gulp,
  plugins,
};

// Tasks import
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgsprite } from "./gulp/tasks/svgSprite.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

// Files change watcher
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

// Export svg sprite task
export { svgsprite };

// Sequental processing with fonts
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Main tasks variable
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

// Task running scripts
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

// Export running scripts
export { dev };
export { build };
export { deployZIP };
export { deployFTP };

// Running default script
gulp.task("default", dev);