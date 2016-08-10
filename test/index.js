var should = require('chai').should();
var simplertimes = require('../index');

// Units of time in milliseconds
var SECOND = 1000;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
var WEEK = 7 * DAY;
var MONTH = 30 * DAY;
var YEAR = 365 * DAY;

describe('simplertimes', function() {
  it('show \'just now\' for times less than a minute', function() {
    var testTimestamp = Date.now();
    simplertimes(testTimestamp).should.equal('just now');
  });

  it('show singular forms for all time units', function() {
    var testTimestamp = Date.now() - MINUTE;
    simplertimes(testTimestamp).should.equal('1 minute ago');

    var testTimestamp2 = Date.now() - HOUR;
    simplertimes(testTimestamp2).should.equal('1 hour ago');

    var testTimestamp3 = Date.now() - DAY;
    simplertimes(testTimestamp3).should.equal('1 day ago');

    var testTimestamp4 = Date.now() - WEEK;
    simplertimes(testTimestamp4).should.equal('1 week ago');

    var testTimestamp5 = Date.now() - MONTH;
    simplertimes(testTimestamp5).should.equal('1 month ago');

    var testTimestamp6 = Date.now() - YEAR;
    simplertimes(testTimestamp6).should.equal('1 year ago');
  });

  it('show correct minutes', function() {
    var fiveMinutesAgo = 5 * MINUTE;
    var testTimestamp = Date.now() - fiveMinutesAgo;
    simplertimes(testTimestamp).should.equal('5 minutes ago');

    var eightHundredSecondsAgo = 800 * SECOND;
    var testTimestamp2 = Date.now() - eightHundredSecondsAgo;
    simplertimes(testTimestamp2).should.equal('13 minutes ago');

    var thirtyMinutesAgo = 30 * MINUTE;
    var testTimestamp3 = Date.now() - thirtyMinutesAgo;
    simplertimes(testTimestamp3).should.equal('30 minutes ago');
  });

  it('show correct hours', function() {
    var ninetyMinutesAgo = 89 * MINUTE;
    var testTimestamp = Date.now() - ninetyMinutesAgo;
    simplertimes(testTimestamp).should.equal('1 hour ago');

    var ninetyOneMinutesAgo = 90 * MINUTE;
    var testTimestamp2 = Date.now() - ninetyOneMinutesAgo;
    simplertimes(testTimestamp2).should.equal('2 hours ago');

    var fiveHoursAgo = 5 * HOUR;
    var testTimestamp3 = Date.now() - fiveHoursAgo;
    simplertimes(testTimestamp3).should.equal('5 hours ago');
  });

  it('show correct days', function() {
    var daysAgo = 3 * DAY;
    var testTimestamp = Date.now() - daysAgo;
    simplertimes(testTimestamp).should.equal('3 days ago');
  });

  it('show correct weeks', function() {
    var weeksAgo = 3 * WEEK;
    var testTimestamp = Date.now() - weeksAgo;
    simplertimes(testTimestamp).should.equal('3 weeks ago');
  });

  it('show correct months', function() {
    var months = 7 * MONTH;
    var testTimestamp = Date.now() - months;
    simplertimes(testTimestamp).should.equal('7 months ago');
  });

  it('show \'5 years ago\'', function() {
    var yearsAgo = 5 * YEAR;
    var testTimestamp = Date.now() - yearsAgo;
    simplertimes(testTimestamp).should.equal('5 years ago');
  });

  it('handle invalid input', function() {
    var testTimestamp = null;
    simplertimes(testTimestamp).should.equal('');

    // var testTimestamp2 = 'abc';
    // simplertimes(testTimestamp2).should.equal('');
  });
});
