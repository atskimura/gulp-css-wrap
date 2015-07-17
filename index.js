var gutil    = require('gulp-util');
var PluginError = gutil.PluginError;
var through  = require('through2');
var css_wrap = require( 'css-wrap' );

const PLUGIN_NAME = 'gulp-slim';

module.exports = function (options) {
  function transform(file, encoding, callback) {
    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      return callback(new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
    }

    file.contents = new Buffer(css_wrap(file.contents.toString(), options || {}));

    callback(null ,file);
  }

  return through.obj(transform);
};
