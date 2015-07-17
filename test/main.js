var assert = require('assert');
var File = require('gulp-util').File;
var fs = require('fs');
var path = require('path');
var cssWrap = require('../');

describe('gulp-css-wrap', function() {
  describe('css_wrap()', function() {

    it('should wrap CSS rules in a namespace', function(done) {
      var base = path.join(__dirname, 'fixtures');
      var filePath = path.join(base, 'styles.css');
      var inputFile = new File({
        cwd: __dirname,
        base: base,
        path: filePath,
        contents: fs.readFileSync(filePath)
      });

      var myCssWrap = cssWrap({selector: '.my-app'});
      myCssWrap.on('data', function(file) {
        var expextedFilePath = path.join(__dirname, 'expect', 'styles.css');
        assert.equal(file.contents.toString(), fs.readFileSync(expextedFilePath).toString().trim());
        done();
      });
      myCssWrap.write(inputFile);
    });

  });
});
