'use strict';

var through = require('through2');

module.exports = function replaceStringIf(condition, match, replacement) {
  var src = '';

  function ondata(d, _, cb) {
    src += d; cb();
  }

  function onend(cb) {
    var self = this;
    var st = src;

    if (condition) {
      st = st.replace(match, replacement);
    }

    self.push(st);

    return cb();
  }
  return through(ondata, onend);
};