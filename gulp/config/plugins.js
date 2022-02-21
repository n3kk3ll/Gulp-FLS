'use strict';
import replace from "gulp-replace"; // Search and replace pathes
import plumber from "gulp-plumber"; // Handling errors
import notify from "gulp-notify"; // Pop-up messages
import browserSync from "browser-sync"; // Local server
import newer from "gulp-newer"; // Update check
import gulpIf from "gulp-if"; // Conditions


export const plugins = {
  replace,
  plumber,
  notify,
  browserSync,
  newer,
  if: gulpIf,
};