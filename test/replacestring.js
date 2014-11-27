// Dependencies
// --------------------------------------------------------------

// Test environment
var chai = require('chai'); // Test assertions that are expressive and readable
var should = chai.should();
var sinon = require('sinon');
var through = require('through2');
var fs = require('fs');

// Things we are testing
var replaceIf = require('../index');
var fixture = __dirname + '/fixtures';

var condition = function() {
  return true;
}
var replacement = 'boop';

// Tests
// ----------------------------------------------------------------
describe('Replace If', function() {
  'use strict';
  var g = null;
  // Setup each test
  beforeEach(function() {
    g = fs.createReadStream(fixture + '/text.txt', 'utf8')
  });

  // Clean up after each test
  afterEach(function() {});

  it('Should initialize components that it knows about', function() {
    var data = '';
    var re = /boop/g;
    g.pipe(replaceIf(true, re, 'replaced'))
      .on('data', function(src) {
        data += src.toString();
      })
      .on('end', function() {
        data.should.equal('replaced replaced beep');
      });
  });

});