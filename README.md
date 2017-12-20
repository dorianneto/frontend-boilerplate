# frontend-boilerplate

> A simple boilerplate to start the frontend of projects using gulp and Bootstrap 3.

## Stack

- HTML5
- CSS3
- Javascript
- gulp
- Less

## Setup
### Requirements

- Node `">=6.11.0"`
- npm `">= 5.5"`
- gulp `">= 1.2.2"`

### Clone the repository

*OSX & Linux*

```bash
git clone --depth 1 https://github.com/dorianneto/frontend-boilerplate.git && cd frontend-boilerplate && rm -rf .git && git init
```

*Windows*

```bash
git clone --depth 1 https://github.com/dorianneto/frontend-boilerplate.git && cd frontend-boilerplate && rd /s /q .git && git init
```

### Dependencies

```bash
npm run start
```

## Develop

```bash
npm run dev
```

## Features
### gulp [plugins](https://gulpjs.com/plugins/):

* [gulp-concat](https://www.npmjs.com/package/gulp-concat/): Concatenates files
* [gulp-file-include](https://www.npmjs.com/package/gulp-file-include/): a gulp plugin for file include
* [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin/): gulp plugin to minify HTML
* [gulp-image](https://www.npmjs.com/package/gulp-image): Optimize PNG, JPEG, GIF, SVG images with gulp task
* [gulp-inject](https://www.npmjs.com/package/gulp-inject): A stylesheet, javascript and webcomponent reference injection plugin for gulp
* [gulp-less](https://github.com/stevelacy/gulp-less): A LESS plugin for Gulp
* [gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css): Minify css
* [gulp-rename](https://www.npmjs.com/package/gulp-rename): gulp-rename is a gulp plugin to rename files easily
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps): Source map support for Gulp.js
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify): Minify JavaScript with UglifyJS2

### npm scripts:

* `npm run build`: builds source files and copy to `dist` directory
* `npm run server`: runs a locally server with browserify (only to preview)

## ROADMAP

- [ ] Substitute gulp for Webpack
- [ ] Substitute Less for SASS or Stylus
- [ ] Creates a directory to configurations
- [ ] Creates a npm script to build project to production environment

Have suggestions? Creates an [issue](https://github.com/dorianneto/frontend-boilerplate/issues) with tag `ROADMAP` :D

## Contribuing
I'm so excited that you want contribute with the project! Follow these [recommendations](/CONTRIBUTING.md).

## Licence

[MIT](/LICENSE.md)

Designed with :heart: by [Dorian Neto](https://github.com/dorianneto)