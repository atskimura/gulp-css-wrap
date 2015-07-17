# gulp-css-wrap

[gulp](http://gulpjs.com/) plugin to wrap CSS rules in a namespace, using [css-wrap](https://github.com/benignware/css-wrap)

## Installation

Install package with NPM and add it to your development dependencies:

```
npm install --save-dev gulp-css-wrap
```

## Usage

Options are directly passed to the [css-wrap](https://github.com/benignware/css-wrap) constructor so all the css-wrap options are available.

```javascript
var cssWrap = require('gulp-css-wrap');

gulp.task('css-wrap', function() {
  return gulp.src('src/*.css')
    .pipe(cssWrap({selector:'.my-app'}))
    .pipe(gulp.dest('dist'));
});
```
