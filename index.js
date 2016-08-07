/**
* Determine relative dates based on the provided unix timestamp.
*
* @param  {Number} unix timestamp
* @return {String}
*/

// Times in milliseconds:
var SECOND = 1000;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
var WEEK = 7 * DAY;
var MONTH = 30 * DAY;
var YEAR = 365 * DAY;

module.exports = function(timestamp) {
    if (!timestamp) {
        return '';
    }

    var dateUpdated = new Date(timestamp);
    var timeDiff = new Date().getTime() - timestamp;
    var timeInteger;
    var timeUnit;
    var timeString = '';

    if (timeDiff < MINUTE) {
        return 'just now';
    } else if (timeDiff < HOUR) {
        timeInteger = parseInt(timeDiff / MINUTE);
        timeUnit = 'minute';
    } else if (timeDiff < DAY) {
        timeInteger = parseInt(timeDiff / HOUR);
        timeUnit = 'hour';
    } else if (timeDiff < WEEK) {
        timeInteger = parseInt(timeDiff / DAY);
        timeUnit = 'day';
    } else if (timeDiff < MONTH) {
        timeInteger = parseInt(timeDiff / WEEK);
        timeUnit = 'week';
    } else if (timeDiff < YEAR) {
        timeInteger = parseInt(timeDiff / MONTH);
        timeUnit = 'month';
    } else {
        timeInteger = parseInt(timeDiff / YEAR);
        timeUnit = 'year';
    }

    if (timeInteger !== 1) {
        timeUnit += 's';
    }

    return [timeInteger, timeUnit, 'ago'].join(' ');
};
