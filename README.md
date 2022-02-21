# Gulp bundle 2022
Made by: @n3kk3ll

Author: FLS

## Plugins included:
* Browsersync - provides local server and reloading webpage automatically on every change you've made.
* del - deletes unnecessary files.
* gulp-autoprefixer - adds vendor prefixes to CSS properties to provide cross-browser compability.
* gulp-clean-css - minifies CSS code.
* gulp-file-include - makes inclusion of files a breeze.
* gulp-fonter - font subsetting and converting plugin. It is using here to convert .otf to .ttf and next from .ttf to .woff. Speaking about font files, of course.
* gulp-group-css-media-queries - group media queries.
* gulp-htmlmin - minifies HTML file.
* gulp-if - switcher for production and development mode. More info below.
* gulp-imagemin - compressing images.
* gulp-newer - only pass through newer source files
* gulp-notify - sends error messages not only in terminal, but in your OS too. Make sure you have your OS notifications ON.
* gulp-plumber - prevent pipe breaking caused by errors.
* gulp-rename - used to rename files like style.css to style.min.css. Of course, with previous compression. If needed.
* gulp-replace - string replacement. The regular expressions was used in this bundle, so we need to replace it to correct string.
* gulp-sass - SASS/SCSS plugin
* gulp-shorthand - makes CSS code lighter and more readable because of using shorthand properties where possible.
* gulp-size - shows files size.
* gulp-svg-sprite - creates SVG sprites.
* gulp-ttf2woff2 - converting .ttf to .woff2. Again, speaking about font files.
* gulp-util - simple logger.
* gulp-version-number - prevents caching files to work with latest version.
* gulp-webp - convert images to WebP.
* gulp-webp-html-nosvg - replace `<img/>` to `<picture/>` supports webp. No SVG included.
* gulp-webpcss - use WebP in CSS where possible.
* gulp-zip - allows you to create ZIP archive with your bundled project.
* sass - SASS/SCSS compiler for Gulp.
* vinyl-ftp - adapter for FTP.
* webp-converter - node.js library for converting any image to webp file format.
* webpack - packs JavaScript modules. 
* webpack-stream - run webpack as a stream.

## If you starting a new project using this bundle

1. You have to create new project with these files included:

    * ***gulp folder***;
    * ***gulpfile.js***;
    * ***package.json***;
    * ***src folder***, but you can create it by yourself. **Be very careful and follow existing architecture to not broke anything!**
    
2. Open terminal in your new project folder.

**Pay your attention to folder you are calling terminal from!**

3. Run 
        
        npm i

**This command will install all dependencies scored in *package.json* file.**

### What next?

* If you have to work with your new project, as expected, you should run your bundle with command described above:
        
        npm run dev
        
**You shall not get minified CSS or JS, any converted to WebP images, because you don't need it in developer mode!**

## How to use:
   
  * To run Gulp in production mode use: 
  
        npm run build
    
**You shall get all of those features in production mode**

* Before bundling, we can create an SVG sprite with command

        npm run svgsprite
  
**You can get all svg's used in project in one sprite for better experience and quick access.**

### Create ZIP archive with project

* To create ZIP archive with project made by production mode, use
    
        npm run zip
    
**As a result, you'll get a ZIP archive with your project in your project root folder.**

### Deploy project into FTP server

* To deploy your project on FTP server, use
    
        npm run ftp
    
**Your project will be uploaded in your FTP server immediately. Don't forget to enter your server login and password in config file!**

**Just do it!**
    
**Happy coding!**
