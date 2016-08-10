/**
* Determine relative dates based on the provided unix timestamp.
*
* @param  {Number} unix timestamp
* @return {String}
*/

// Relative time in milliseconds:
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

    if (timeDiff < MINUTE) {
        return 'just now';
    } else if (timeDiff < HOUR) {
        timeInteger = Math.round(timeDiff / MINUTE);
        timeUnit = 'minute';
    } else if (timeDiff < DAY) {
        timeInteger = Math.round(timeDiff / HOUR);
        timeUnit = 'hour';
    } else if (timeDiff < WEEK) {
        timeInteger = Math.round(timeDiff / DAY);
        timeUnit = 'day';
    } else if (timeDiff < MONTH) {
        timeInteger = Math.round(timeDiff / WEEK);
        timeUnit = 'week';
    } else if (timeDiff < YEAR) {
        timeInteger = Math.round(timeDiff / MONTH);
        timeUnit = 'month';
    } else {
        timeInteger = Math.round(timeDiff / YEAR);
        timeUnit = 'year';
    }

    if (timeInteger !== 1) {
        timeUnit += 's';
    }

    return [timeInteger, timeUnit, 'ago'].join(' ');
};
